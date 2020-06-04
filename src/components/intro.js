import React from "react"
import "../styles/header.css"
import siteIcon from "../images/site-icon.png"
import bgSvg2 from "../images/download.svg"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
        <Image fixed={data.avatar.childImageSharp.fixed} style={{marginBottom:`0`}} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: 0,
            margin: "6px auto",
          }}
        >
          <div className="social-cont">
            <div className="circle-cont">
              <a href="mailto:saisumanth2303gmail.com">
                <img
                  src="https://image.flaticon.com/icons/svg/3011/3011178.svg"
                  alt=""
                  width="30"
                />
              </a>
            </div>
            <div className="circle-cont">
              <a href="https://twitter.com/Mr404Found">
                <img
                  src="https://image.flaticon.com/icons/svg/733/733579.svg"
                  alt=""
                  width="30"
                />
              </a>
            </div>

            <div className="circle-cont">
              <a href="">
                <img
                  src="https://image.flaticon.com/icons/svg/889/889111.svg"
                  alt=""
                  width="30"
                />
              </a>
            </div>
            <div className="circle-cont">
              <a href="">
                <img
                  src="https://image.flaticon.com/icons/svg/1384/1384063.svg"
                  alt=""
                  width="30"
                />
              </a>
            </div>
          </div>
        </div>
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
          Sai Sumanth
        </h1>
        <p align="center">
          Teenager who code. <br />
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
