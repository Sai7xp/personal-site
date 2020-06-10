import React from "react"
import { Link } from "gatsby"
const articlesList = () => {
  return (
    <div style={{ marginTop: `40px` }}>
      <h4
        className=".article-head"
        style={{
          fontFamily: `"Inter", sans-serif`,
          margin: `0`,
          display: `flex`,
          marginBottom: `15px`,
          color: `#444452`,
          color: `var(--theme)`,
          fontSize: `18px`,
          textTransform: `uppercase`,
        }}
      >
        <span>Latest Articles</span>
      </h4>

      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `40px 2fr auto`,
          marginBottom: `30px`,
        }}
      >
        <img
          src="https://create-react-app.dev/img/logo-og.png"
          alt=""
          width="30"
          height="30"
          style={{
            verticalAlign: `middle`,
            margin: `0`,
            borderRadius: `100%`,
            objectPosition: `center`,
            objectFit: `cover`,
          }}
        />
        <p
          style={{
            // display:`inline`
            margin: `0`,
            lineHeight: `1.2`,
            fontSize: `1.2rem`,
          }}
        >
          How to implement chat feature in flutter like a pro <br />{" "}
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,

              fontSize: `0.7rem`,
            }}
          >
            March 23, 2020 ~ 7 min read
          </small>
        </p>
      </div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `40px 2fr auto`,

          marginBottom: `30px`,
        }}
      >
        <img
          src="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/03/Apple-Logo-Colores-1024x576.jpg"
          alt=""
          width="30"
          height="30"
          style={{
            verticalAlign: `middle`,
            margin: `0`,
            borderRadius: `100%`,
            objectPosition: `center`,
            objectFit: `cover`,
          }}
        />
        <p
          style={{
            // display:`inline`
            margin: `0`,
            lineHeight: `1.2`,
            fontSize: `1.2rem`,
          }}
        >
          Implement dark mode like a pro in Gatsby Js and react <br />{" "}
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,

              fontSize: `0.7rem`,
            }}
          >
            Feb 23, 2018 ~ 7 min read
          </small>
        </p>
      </div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `40px 2fr auto`,

          marginBottom: `30px`,
        }}
      >
        <img
          src="https://miro.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png"
          alt=""
          width="30"
          height="30"
          style={{
            verticalAlign: `middle`,
            margin: `0`,
            borderRadius: `100%`,
            objectPosition: `center`,
            objectFit: `cover`,
          }}
        />
        <p
          style={{
            // display:`inline`
            margin: `0`,
            lineHeight: `1.2`,
            fontSize: `1.2rem`,
          }}
        >
          Implement firebase auth sign-in with splash screen <br />{" "}
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,

              fontSize: `0.7rem`,
            }}
          >
            May 23, 2019 ~ 3 min read
          </small>
        </p>
      </div>

      {/* <button
        style={{
          border: `1px solid #F7B801`,
          borderRadius: `8px`,
          padding: `4px 10px`,
          margin:`0 auto`,

          fontSize: `12px`,
          backgroundColor: `#FFF7DD`,
          backgroundColor: `transparent`,
          color: `#F7B801`,
        }}
      >
        #javascript
      </button>
      <button
        style={{
          border: `1px solid #4ad991`,
          borderRadius: `8px`,
          padding: `4px 10px`,
          // margin:`0 auto`
          marginLeft: `15px`,
          fontSize: `12px`,
          backgroundColor: `#daf7eb`,
          backgroundColor: `transparent`,
          color: `#4ad991`,
        }}
      >
        #flutter
      </button>
      <button
        style={{
          border: `1px solid #8280ff`,
          borderRadius: `8px`,
          padding: `4px 10px`,
          marginLeft: `15px`,
          fontSize: `12px`,
          backgroundColor: `#ebe7ff`,
          backgroundColor: `transparent`,
          color: `#8280ff`,
        }}
      >
        #gatsbyjs
      </button> */}

      <h4
        className=".article-head"
        style={{
          fontFamily: `"Inter", sans-serif`,
          margin: `0`,
          display: `flex`,
          marginBottom: `15px`,
          color: `#444452`,
          color: `var(--theme)`,
          fontSize: `18px`,
          textTransform: `uppercase`,
        }}
      >
        <span>Browser Extensions</span>
      </h4>
      <ul>
        <li>
          Chrome, Chrome Canary (<strong>my default browser</strong>)
        </li>
        <li>Opera</li>
        <li>Mozilla Firefox, Mozilla Firefox Nighly,</li>
        <li>
          Safari, Safari Technology Preview &amp; Nightly (SW is supported 😬).
        </li>
      </ul>
    </div>
  )
}

export default articlesList
