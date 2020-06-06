import React from "react"
import {Link} from "gatsby"
const articlesList = () => {
  return (
    <div style={{ marginTop: `40px` }}>
      <h4
        className=".article-head"
        style={{
          fontFamily: `"Inter", sans-serif`,
          margin: `0`,
          display:`flex`,
          marginBottom: `15px`,
          color: `#444452`,
          color: `var(--theme)`,
          fontSize:`17px`
        }}
      >
        <span>LATEST ARTICLES</span>
        
        <button style={{
          border:`1px solid #F7B801`,
          borderRadius:`6px`,
          padding:`3.5px 8px`,
          marginLeft:`20px`,
          outline:`none`,
          fontSize:`12px`,
          backgroundColor:`#FFF7DD`,
          color:`#F7B801`,
          fontFamily:`"Quicksand"`,
        }}>
          Read More
          
        </button>
      </h4>
      <a
        style={{
          // textAlign:`center`,
          color: `var(--h)`,
          color: `#444452`,
          margin: `0`,
          fontSize: `1.2rem`,
          textRendering: `optimizeLegibility`,
          // fontWeight: `bold`,
          lineHeight:`1.0`,
          // fontFamily: `"Apercu",monospace`,
        }}
      >
        🥘 Flutter Firebase Google sign-in Auth splashscreen
        {/* 🍛 */}
      </a>
      <br />
      <small
        style={{
          // textAlign:`center`,
          color: `var(--textNormal)`,
          marginTop: `0`,
          fontSize: `0.7rem`,
          fontFamily:`"MOntserrat", sans-serif`
        }}
      >
        March 23, 2020 ~ 3 min read
      </small>
      <p
        style={{
          // textAlign:`center`,
          color: `var(--secondaryText)`,
          // marginTop: `8px`,
          // marginBottom: `8px`,
          fontSize: `1rem`,
          lineHeight: `1.3`,
          // fontFamily: `'Quicksand',sans-serif`,
        }}
      >
        {/* Firebase is a mobile platform by Google. Stores data in JSON format. It
        provides backend services. */}
      </p>
      <a
        style={{
          // textAlign:`center`,
          color: `var(--theme)`,
          color: `#444452`,
          margin: `0`,
          fontSize: `1.2rem`,
          textRendering: `optimizeLegibility`,
          // fontWeight: `bold`,
          lineHeight:`1.0`
          // fontFamily: `"Apercu",monospace`,
        }}
      >
        <span>🍳</span> How to build a blog in 10 minutes with GatsbyJs
        {/* 🍛 */}
      </a>
      <br />
      <small
        style={{
          // textAlign:`center`,
          color: `var(--textNormal)`,
          marginTop: `0`,
          fontFamily:`"MOntserrat", sans-serif`,
          fontSize: `0.7rem`,
        }}
      >
        March 26, 2018 ~ 5 min read
      </small>
      <p
        style={{
          // textAlign:`center`,
          color: `var(--secondaryText)`,
          // marginTop: `8px`,
          fontSize: `1rem`,
          lineHeight: `1.3`,
          fontFamily: `'Quicksand',sans-serif`,
        }}
      >
        {/* Gatsby is a React-based, GraphQL powered, static site generator. ... It
        uses powerful preconfiguration to build a site that uses only static
        files. */}
      </p>
        <button style={{
          border:`1px solid #F7B801`,
          borderRadius:`6px`,
          padding:`3px 8px`,
          // margin:`0 auto`
          
          fontSize:`12px`,
          backgroundColor:`#FFF7DD`,
          backgroundColor:`transparent`,
          color:`#F7B801`,
          fontFamily:`"Quicksand"`,
        }}>
          #javascript
        </button>
        <button style={{
          border:`1px solid #4ad991`,
          borderRadius:`6px`,
          padding:`3px 8px`,
          // margin:`0 auto`
          marginLeft:`15px`,
          fontSize:`12px`,
          backgroundColor:`#daf7eb`,
          // backgroundColor:`transparent`,
          color:`#4ad991`,
          fontFamily:`"Quicksand"`,
        }}>
          #flutter
        </button>
        <button style={{
          border:`1px solid #8280ff`,
          borderRadius:`6px`,
          padding:`3px 8px`,
          marginLeft:`15px`,
          fontSize:`12px`,
          backgroundColor:`#ebe7ff`,
          backgroundColor:`transparent`,
          color:`#8280ff`,
          fontFamily:`"Quicksand"`,
        }}>
          #gatsbyjs
        </button>
        

    </div>
  )
}

export default articlesList
