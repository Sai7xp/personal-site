---
title: Flutter - Firebase Google Sign-in Auth with SplashScreen using updated API
date: "2019-12-22T13:15:03.284Z"
description: "Let's see how to implement authentication in flutter app using firebase"
---

#**0.Introduction**
Have you ever wanted to implement user authentication in your flutter Application? Well, you've come to the right place..!
Let's see how to add **GoogleSignIn()** auth using Firebase Authentication.

###What you'll learn
>- Adding SplashScreen to your app
- Navigating user from the SplashScreen to AuthScreen or HomeScreen
- GoogleSignIn Authentication

**Demo of the final implementation...**
![Flow Chart](https://raw.githubusercontent.com/MovingMelody/DEV.to-Article-Repo/master/assets/devTo%20article%20assets/Screenrecorder-2020-05-27-22-36-min.gif)
### What is Firebase? (quick intro..)
>Firebase is Google's mobile platform with a variety of services to build & ship our apps quickly. It is categorized as a NoSQL database and stores data in JSON like documents.

![I write code](https://miro.medium.com/max/3330/1*gJJhD2GynUDikKl5OWbk_w.gif)
#**1.Setup Firebase Project**
Head over to [Firebase Console](https://console.firebase.google.com/) then add a new project. 
To keep things simple and short I'm not explaining every step here. Trust me next steps are pretty clear to add your app to firebase.
- Make sure to set up a sign-in method in the Authentication section of firebase console. Otherwise, things are not gonna work as expected.

At a particular step, it asks you to enter SHA-1 Key to complete the process. Run this command in your cmd to get the SHA-1 key.
```java
keytool -list -v -alias androiddebugkey -keystore C:\Users\YOUR_USER_NAME_HERE\.android\debug.keystore
```
#**2.Write some Code**
Before writing code let's understand what we are going to build.
>When the user opens app for the first time we should navigate user from **SplashScreen** to **AuthScreen**.
Next time when the user opens the app we should check if user is already logged in or not. 
If **user = loggedIn** then navigate to `HomeScreen` by skipping `AuthScreen.` ELSE navigate user from `SplashScreen` to `AuthScreen`.

![Flow Chart](https://raw.githubusercontent.com/MovingMelody/DEV.to-Article-Repo/master/assets/devTo%20article%20assets/devtoAuthLogic.png)

###Let's write some code🥳
![I write code](https://thumbs.gfycat.com/SlimImpeccableDormouse-max-1mb.gif)
####Packages that we'll use:
>- google_sign_in: ^4.5.1
- firebase_auth: ^0.16.1

Add the above two packages to your `pubspec.yaml` file

1. Fire-up your preferred code editor and open your **_main.dart_** file.
Remove all the boiler-plate code in _main.dart_ file and add the below code.

```dart
import 'package:YOUR_PROJECT_NAME/screens/homescreen.dart';
import 'package:YOUR_PROJECT_NAME/screens/splashscreen.dart';
import 'package:YOUR_PROJECT_NAME/screens/authscreen.dart';
import 'package:flutter/material.dart';

// Defining routes for navigation
var routes = <String, WidgetBuilder>{
  "/auth": (BuildContext context) => AuthScreen(),
  "/home":(BuildContext context) => HomeScreen(),
};

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'Google SignIn Auth',
    routes: routes,
// Showing SplashScreen as the first screen when user launches the app.
    home: SplashScreen(),
  ));
}
```
2.Let's build UI for the remaining screens
 - SplashScreen UI and Logic

Create a new dart file named `splashscreen.dart` inside the `lib/screens` folder.
Your `splashscreen.dart` should look like this..
```dart
import 'dart:async';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class SplashScreen extends StatefulWidget {
  _SplashScreenState createState() => _SplashScreenState();
}
class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    navigateUser();
  }
  navigateUser() {
    FirebaseAuth.instance.currentUser().then((currentUser) {
       //Checking whether user is loggedIn or not
      if (currentUser == null) { 
      //If user == null navigate the user to AuthScreen after 2 Sec.
        Timer(Duration(seconds: 2),() => 
           Navigator.pushReplacementNamed(context, "/auth"));
      } else {
        Timer(Duration(seconds: 2),
            () => Navigator.pushReplacementNamed(context, "/home"));
      }
    });
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Stack(
          fit: StackFit.expand,
          children: <Widget>[
            Container(
              color: Color(0xFFB2F2D52),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "Splash Screen",
                  style: TextStyle(
                    fontSize: 30.0,
                    color: Color(0xFFBffffff),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```
###Let's implement Firebase Authentication
Create a new file named `authscreen.dart` inside `lib/screens` folder in which we'll setup google sign in and AuthScreen UI.

<!-- - Code for the `authscreen.dart` UI and logic: -->
  
```dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
String name;
String email;
String imageUrl;
final FirebaseAuth auth = FirebaseAuth.instance;
final GoogleSignIn googleSignIn = GoogleSignIn();
class AuthScreen extends StatefulWidget {
  @override
  _AuthScreenState createState() => _AuthScreenState();
}
class _AuthScreenState extends State<AuthScreen> {
  bool isVisible = false;
  Future<FirebaseUser> _signIn() async {
    final GoogleSignInAccount googleSignInAccount = await googleSignIn.signIn();
    final GoogleSignInAuthentication gsa = await googleSignInAccount.authentication;
    final AuthCredential credential = GoogleAuthProvider.getCredential(
      idToken: gsa.idToken,
      accessToken: gsa.accessToken,
    );
    final AuthResult authResult = await auth.signInWithCredential(credential);
    final FirebaseUser firebaseUser = authResult.user;
    name = firebaseUser.displayName;
    email = firebaseUser.email;
    imageUrl = firebaseUser.photoUrl;
    final FirebaseUser currentUser = await auth.currentUser();
    assert(firebaseUser.uid == currentUser.uid);
    return firebaseUser;
  }
  @override
  Widget build(BuildContext context) {
    var swidth = MediaQuery.of(context).size.width;
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Container(
            decoration: BoxDecoration(
                image: DecorationImage(
                image:AssetImage("assets/images/bg.png"),fit: BoxFit.cover)),
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Visibility(
                child: CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation<Color> 
                (Color(0xFFB2F2D52)),
                ),
                visible: isVisible,
              )
            ],
          ),
          Container( margin: const EdgeInsets.only( bottom: 60.0, ),
            child: Align(
              alignment: Alignment.bottomCenter,
              child: SizedBox( height: 54.0, width: swidth / 1.45,
                child: RaisedButton(
                  onPressed: () {
                    setState(() {
                      this.isVisible = true;
                    });
                    _signIn().whenComplete(() { 
              Navigator.pushReplacementNamed(context, "/home");
                    }).catchError((onError) { 
            Navigator.pushReplacementNamed(context, "/auth"); });
                  },
                  child: Text(
                    ' Continue With Google',
                    style: TextStyle(fontSize: 20,),
                  ),
                  shape: RoundedRectangleBorder(
                   borderRadius: new BorderRadius.circular(30.0),
                  ),
                  elevation: 5, color: Color(0XFFF7C88C),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```
We are almost done, let's build our `HomeScreen` where we'll navigate user to this page after successful login.
- Create a new screen called `homescreen.dart` inside `lib/screens` folder and populate the file with below code.
```dart
import 'package:YOUR_PROJECT_NAME/screens/authscreen.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hello, " + name),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.exit_to_app),
            onPressed: () async {
              name = '';
              email = '';
              // Logging out the user
              await FirebaseAuth.instance.signOut();
              await googleSignIn.disconnect();
              await googleSignIn.signOut();
              Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(builder: (context) => 
                   AuthScreen()), (Route<dynamic> route) => false);
            },
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            CircleAvatar( radius: 40.0, backgroundImage: NetworkImage(imageUrl), ),
            SizedBox( height: 10.0, ),
            Text(email, style: TextStyle(fontSize: 20.0),),
          ],
        ),
      ),
    );
  }
}
```
#**3.Conclusion**
Well, we've successfully implemented authentication in our flutter app.
![congrats gif](https://thumbs.gfycat.com/BabyishAppropriateAnchovy-size_restricted.gif)
If you've any doubts, you can find the GitHub repo of this super simple project in the following link:
 {% github MovingMelody/DEV.to-Article-Repo no-readme %}

###App ScreenShots
![screenshots](https://raw.githubusercontent.com/MovingMelody/DEV.to-Article-Repo/master/assets/devTo%20article%20assets/Frame%202.png)
####keep Fluttering!
Thank you for reading, if you found the article useful make sure to show some love.
   -Moving Melody
Let's catch up on [Twitter!](https://twitter.com/MovingMelody)
