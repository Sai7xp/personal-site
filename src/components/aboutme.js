import React from "react"
import styled from "styled-components"
import wavemoji from "../images/wave.png"
import svg1 from "../images/site-icon.png"
import svg from "../images/SVG/2.svg"

const AboutDesc = styled.h2`
  font-family: "Apercu", monospace;
  font-weight: 300;
  line-height: 1.5;
  max-width: 560px;
  font-size: 1.4rem;
  color: #444452;
`

const ArticleItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 0;
  padding: "1rem 0";
  margin: "0";
  border: 1px solid transparent;
  border-bottom-color: "#EDF1F7";
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: "50px";
  height: "50px";
`

function AboutMe() {
  return (
    <div style={{ marginTop: `80px` }} id="test-id">
      {/* <h4
        style={{
          fontFamily: `"Inter", sans-serif`,
          margin: `0`,
          marginBottom: `15px`,
          color: `#444452`,
        }}
      >
      </h4>
      <img className="abt-svg" src={svg} alt=""></img>
      <AboutDesc className="abtxt">
        Hello!{" "}
        <span class="wave">
          {" "}
          <img src={wavemoji} width="24" alt="" style={{ margin: `0` }} />
        </span>
      </AboutDesc>
      <AboutDesc>
        I'm <span className="name">Sai Sumanth,</span> a design-minded front-end
        web developer, UI/UX Designer &amp; Firebase Lover. People find me to
        be an upbeat, self-motivated team player with excellent communication
        skills.<br/>
        <br/>
        
        For the past several years I have worked in lead qualification,
        telemarketing, and customer service in the technology industry.
      </AboutDesc> */}

      {/* <ArticleItem>
        <ImageWrapper>
          <img
            src="https://cdn.auth0.com/blog/es6rundown/logo.png"
            alt=""
            width="50"
            style={{
              position: `absolute`,
              height: `50px`,
              width: `50px`,
              borderRadius:`100%`,
              objectFit: `cover`,
              objectPosition: `center center`,
              // opacity: `0`,
              transitionDelay: `500ms`,
            }}
          />
        </ImageWrapper>
        <div style={{
          position:`block`,

        }}>
          <h3>
            firebase is lub
          </h3>
        </div>
      </ArticleItem> */}

      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `50px 1fr 0`,
          alignItems:`start`
          // padding:`2rem`
          // alignItems:`center`
          // alignContent:`center`
        }}
      >
        <div style={{
          position:`relative`,
          // overflow:`hidden`,
          display:`inline-block`
        }}>
          <img
            src="https://cdn.auth0.com/blog/es6rundown/logo.png"
            alt=""
            width="50"
            style={{
              position: `absolute`,
              height: `30px`,
              width: `30px`,
              borderRadius: `100%`,
              objectFit: `cover`,
              objectPosition: `center center`,
              // opacity: `0`,
              marginRight: `10px`,
              transitionDelay: `500ms`,
            }}
          />
        </div>
        <div
          style={{
            display: `block`,
            // position:`revert`
          }}
        >
          <a
            style={{
              // textAlign:`center`,
              color: `var(--theme)`,
              margin: `0`,
              padding:`0`,
              fontSize: `1.25rem`,
              textRendering: `optimizeLegibility`,
              fontWeight: `bold`,
              lineHeight: `0.2`,
              fontFamily: `"Apercu",monospace`,
            }}
          >
            Flutter Firebase Google sign-in Auth splashscreen
            {/* 🍛 */}
          </a>
          <br />
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,
              fontSize: `0.8rem`,
            }}
          >
            March 23, 2020 | 5 min read
          </small>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
