---
title: "JWT Authentication in Go"
description: "Implement jwt auth to APIs - using golang-jwt package"
date: "April 16 2025"
---

## How do we add Authorization to our APIs in Go ?

### Basic Authorization

The simplest way of doing that is by adding Basic Authorization Header. **"username:password"** will be encoded in base64 format and sent with every request. This Basic Authorization should not be used with `http` as base64 strings can be decoded easily. Only `https` is recommended.

```bash
Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l
```

### Bearer Tokens

A more secure way is to use Bearer Tokens — commonly used in modern APIs.
Bearer tokens are added in http specification with `OAUTH2`.

```bash
Authorization: Bearer <token>
```

User has to include the token in `Authorization` Header, server verifies the token and token expiry time and grants access to protected resources. Let's see how we can create a http middleware to verify the received jwt token.

#### Install the JWT go package

```bash
go get github.com/golang-jwt/jwt/v5
```

#### Our Main function

```go
func main() {

	mux := http.NewServeMux()
	mux.HandleFunc("POST /login", RecoveryHandler(loginHandler))
	mux.HandleFunc("GET /posts", ValidateTokenMiddleware(getUserPostsHandler)) // we can use RecoveryHandler for this as well

	log.Printf("listening on port %s\n", PORT)
	if err := http.ListenAndServe(PORT, mux); err != nil {
		log.Fatal(err)
	}

}

```

#### Generating the token using golang-jwt package

```go
/*
Util method to generate the JWT token for a user
*/
type UserClaims struct {
	Username string
	jwt.RegisteredClaims
}

func generateJWT(username string) string {
	userClaims := UserClaims{
		Username: username,
		RegisteredClaims: jwt.RegisteredClaims{
			IssuedAt:  &jwt.NumericDate{Time: time.Now()},
			ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Minute * 10)}, // this expiration minutes should come from env config in production
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS512, userClaims)
	signedString, err := token.SignedString(jwt_secret)
	if err != nil {
		log.Panic("Error while generating the token: ", err)
	}
	return signedString
}
```

#### Verifying the token

```go
tkn, err := jwt.Parse(receivedToken, func(t *jwt.Token) (interface{}, error) {
			return jwt_secret, nil
		})
```

#### Validate JWT Token as a Middleware

```go
func ValidateTokenMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Println("Validating token...")
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "token missing", http.StatusUnauthorized)
			return
		}
		receivedToken := strings.Split(authHeader, " ")[1]

		tkn, err := jwt.Parse(receivedToken, func(t *jwt.Token) (interface{}, error) {
			return jwt_secret, nil
		})

		expiresAt, _ := tkn.Claims.GetExpirationTime()
		log.Println("Token will expire at: ", expiresAt)
		if err != nil || !tkn.Valid {
			errMsg := fmt.Sprintf("Invalid Token %v", err)
			log.Println(errMsg)
			http.Error(w, errMsg, http.StatusUnauthorized)
			return
		}
		next.ServeHTTP(w, r)
	})
}
```

#### Login Handler

```go
func loginHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var creds Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		log.Panic("Error while reading r.Body: ", err)
	}

	if creds.Username != "testuser" || creds.Password != "test-jwt-123" {
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}

	// create token for the user and send it in response
	token := generateJWT(creds.Username)
	json.NewEncoder(w).Encode(map[string]interface{}{"message": "Login Successful", "token": token})
}

```

#### Protected Handler

We need to wrap this Handler with `ValidateTokenMiddleware`

```go
func getUserPostsHandler(w http.ResponseWriter, r *http.Request) {

	// validate token middleware will be executed before this handler
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"data":"user-data"}`))
	w.WriteHeader(http.StatusOK)
}
```

Access to full code - https://github.com/Sai7xp/web-auth-go
