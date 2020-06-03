import React from "react"

const articlesList = () => {
  return (
    <div style={{ marginTop: `40px` }}>
      <h1
        style={{ 
          fontFamily: `"Quicksand",sans-serif`, 
          margin: `0` ,
          marginBottom:`15px`,
          color:`var(--theme)`,
          textAlign:`center`,
          // textDecorationLine:`underline`
          }}
      >
        {/* Recent Articles */}
      </h1>
      <a
        style={{
          // textAlign:`center`,
          color: `var(--theme)`,
          margin: `0`,
          fontSize: `1.4rem`,
          textRendering: `optimizeLegibility`,
          fontWeight: `bold`,
          fontFamily: `"Apercu",monospace`,
        }}
      >
        🍛 Flutter Firebase Google sign-in Auth splashscreen
      </a>
      <br />
      <small
        style={{
          // textAlign:`center`,
          color: `var(--textNormal)`,
          marginTop: `0`,
          fontSize:`0.8rem`
        }}
      >
        March 23, 2020
      </small>
      <p
        style={{
          // textAlign:`center`,
          color: `var(--secondaryText)`,
          marginTop: `8px`,
          fontSize: `1rem`,
          lineHeight:`1.3`,
          fontFamily: `'Quicksand',sans-serif`,
        }}
      >
        Firebase is a mobile platform by Google. Stores data in JSON format. It
        provides backend services.
      </p>
    </div>
  )
}

export default articlesList
