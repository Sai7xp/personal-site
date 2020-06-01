import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      position: `fixed`,
      width: "100vw",
      borderTop: `solid 3px ##C7D0FF`,
      zIndex: "9999",
      backgroundColor:"#f8f8f8",
      backgroundColor:"#ffffff",
      top: 0,
      boxShadow: `var(--navShadow)`,
    }}
  >
    <div
      style={{
        padding: `1.0rem 24px`,
        maxWidth: "37em",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--theme)`,
            textDecoration: `none`,
          }}
        >
          Ed.
        </Link>
        <Link
          to="/"
          style={{
            color: `#323232`,
            float: `right`,
            fontSize:`1.15rem`,
            paddingLeft: "16px",
            paddingRight: "0px",
            fontFamily: `'Tajawal',sans-serif`,
            fontWeight: `400`,
            margin: `0`,
            textDecoration: `none`,
          }}
        >
          Articles
        </Link>

        <Link
          to="/"
          style={{
            color: `#323232`,
            fontSize: `1.15rem`,
            float: `right`,
            fontFamily: `'Tajawal',sans-serif`,
            fontWeight: `300`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
