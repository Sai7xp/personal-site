import React from "react"
import "../styles/header.css"
import bgSvg2 from "../images/download.svg"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialLinks from "../components/socialLinks"
const Intro = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/site-icon.png/" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        // flexDirection:`row-reverse`,
        padding: "18px",
        flexWrap: "wrap",
        boxShadow: "",
      }}
    >
      <img className="bg-svg" src={bgSvg2} alt=""></img>
      <img className="bg-svg2" src={bgSvg2} alt=""></img>
      <div style={{ margin: "0 28px" }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          style={{ marginBottom: `0` }}
        />
        <SocialLinks/>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          // marginRight:`0px`,
          // fontFamily: `"Tajawal",sans-serif`,
          lineHeight: `31px`,
        }}
      >
        <h1
          style={{
            color: "var(--theme)",
            fontWeight: `800`,
            marginTop: "14px",
            marginBottom: `4px`,
            padding: 0,
            fontFamily: `"Tajawal",sans-serif`,
            fontSize: `44px`,
          }}
        >
          SAI SUMANTH
        </h1>
        <p align="center">
          Regular guy who code. <br />
          Gatsby Js Fanboy.
          <br />
          {/* <a href="mailto:saisumanth3203@gmail.com" style={{
            color:`var(--theme)`
          }}>
            saisumanth3203@gmail.com
          </a> */}
          <ul>
            <li>
              <a href="https://www.github.com/Mr404Found">Say Hello!</a>
              {/* <a href="mailto:saisumanth2303@gmail.com">Say Hi!</a> */}
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Intro
