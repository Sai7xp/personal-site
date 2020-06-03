import React from "react"
import "../styles/header.css"
import siteIcon from "../images/site-icon.png"
import bgSvg2 from "../images/download.svg"

const Intro = () => {
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
        <div
          style={{
            maxWidth: 140,
          }}
        >
          <img
            src={siteIcon}
            alt=""
            srcset=""
            style={{ marginBottom: `0px` }}
          />
        </div>

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
              <a href="">
                <img
                  src="https://image.flaticon.com/icons/svg/2111/2111628.svg"
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
                  src="https://image.flaticon.com/icons/svg/732/732245.svg"
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
            margin: "10px 0",
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
              <a href="https://www.github.com/Mr404Found">Say Hi!</a>
              {/* <a href="mailto:saisumanth2303@gmail.com">Say Hi!</a> */}
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Intro
