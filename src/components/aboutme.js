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

function AboutMe() {
  return (
    <div style={{ marginTop: `80px` }} id="test-id">
      <h4
        style={{
          fontFamily: `"Inter", sans-serif`,
          margin: `0`,
          marginBottom: `15px`,
          color: `#444452`,

          // textAlign:`center`,
          // textDecorationLine:`underline`
        }}
      >
        {/* <span>02. ABOUT ME</span> */}
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
      </AboutDesc>
    </div>
  )
}

export default AboutMe
