import React from "react"

const articlesList = () => {
  return (
    <div style={{marginTop:`40px`}}>
      <a
        style={{
          // textAlign:`center`,
          color: `var(--theme)`,
          margin: `0`,
          fontSize:`1.51572rem`,
          textRendering:`optimizeLegibility`,
          fontWeight:`bold`
        }}
      >
        🍛 FLutter Firebase Google sign-in Auth splashscreen
      </a><br/>
      <small
        style={{
          // textAlign:`center`,
          color: `var(--textNormal)`,
          marginTop: `0`,
        }}
      >
        March 23, 2020
      </small>
      <p style={{
          // textAlign:`center`,
          color: `var(--secondaryText)`,
          marginTop: `8px`,
          fontSize:`1.1rem`,
          fontFamily:`'Quicksand',sans-serif`
        }}>Firebase is a mobile platform by Google. Stores data in JSON format. It provides backend services.</p>
    </div>
  )
}

export default articlesList
