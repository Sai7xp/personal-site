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
          fontSize:`18px`
        }}
      >
        <span>LATEST ARTICLES</span>
        
          
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
    </div>
  )
}

export default articlesList
