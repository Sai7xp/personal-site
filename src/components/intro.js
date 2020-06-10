import React from "react"
import "../styles/header.css"
import bgSvg2 from "../images/download.svg"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialLinks from "../components/socialLinks"
import Fade from "react-reveal/Fade"
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
        <SocialLinks />
      </div>
      
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            
            lineHeight: `31px`,
          }}
        >
        
          <h1
            style={{
              color: "var(--theme)",
              fontWeight: `800`,
              marginTop: "18px",
              marginBottom: `8px`,
              padding: 0,
              fontFamily: `"Tajawal",sans-serif`,
              fontSize: `44px`,
            }}
          >
            Sai Sumanth
          </h1>
          <p align="center" style={{
            fontSize:`18px`,
            // color: "#737373  ",
            // fontWeight:`300`
          }}> I Love Firebase.
            <br />
            Gatsby Js Fanboy.
            <br />
            <ul>
              <li className="hello1">
                <a className="hello" href="https://wa.me/919642183590/?text=Hi I've a project">
                  Say Hello!
                </a>
                {/* <a href="mailto:saisumanth2303@gmail.com">Say Hi!</a> */}
              </li>
            </ul>
          </p>
        </div>
    
    </div>
  )
}

export default Intro
