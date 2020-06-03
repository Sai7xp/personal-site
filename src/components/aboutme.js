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
    <div style={{ marginTop: `40px`}}>
   
     <img className="abt-svg" src={svg} alt="" ></img>
      <AboutDesc className="abtxt">
        Hello!{" "}
        <span class="wave">
          {" "}
          <img src={wavemoji} width="24" alt="" style={{ margin: `0` }} />
        </span>
      </AboutDesc>
      <AboutDesc>
        I'm <span className="name">Sai Sumanth,</span> a design-minded front-end
        web de veloper, UI/UX Designer &amp; Firebase Lover.
      </AboutDesc>
    </div>
  )
}

export default AboutMe
