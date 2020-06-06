import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import twitter from "../images/twitter.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
const HeaderLink = styled(Link)`
  color: #444452;
  font-size: 15px;
  margin-right: 15px;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
`
const HeaderLink2 = styled.button`
  color: #444452;
  font-size: 15px;
  /* margin-right: 188px; */
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  outline: none;
  cursor:pointer;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      position: `fixed`,
      width: "100vw",
      zIndex: "9999",
      backgroundColor: "#ffffff",
      top: 0,
      // padding:"10px",
      boxShadow: `var(--navShadow)`,
    }}
  >
    <div
      style={{
        padding: `0.7rem 20px`,
        paddingTop: `0.58rem`,
        maxWidth: "37.4em",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h2 style={{ margin: 0 }}>
        <HeaderLink to="/" activeStyle={{ color: `var(--tblue)` }}>
          Home
        </HeaderLink>
        <HeaderLink to="/blog" activeStyle={{ color: `var(--tblue)` }}>
          Articles
        </HeaderLink>
        <HeaderLink to="/about" activeStyle={{ color: `var(--tblue)` }}>
          About
        </HeaderLink>
        {/* <HeaderLink2 onClick={() => scrollTo("#test-id")}>About</HeaderLink2> */}
        

        <div
          style={{
            float: `right`,
            paddingTop: `6.8px`,
          }}
        >
          <img
            src="https://image.flaticon.com/icons/svg/2917/2917242.svg"
            alt=""
            width="19"
            style={{
              float: `right`,
              marginLeft: `24px`,
              marginBottom: `0`,
            }}
          />{" "}
          <a href="https://twitter.com/MovingMelody" target="_blank">
            <img
              src="https://image.flaticon.com/icons/svg/733/733635.svg"
              alt=""
              width="18"
              style={{
                float: `right`,
                marginBottom: `0`,
              }}
            />
          </a>
        </div>
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
