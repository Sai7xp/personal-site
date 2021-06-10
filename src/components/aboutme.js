import React from "react"
import styled from "styled-components"
import wavemoji from "../images/wave.png"
import svg from "../images/SVG/2.svg"
import SEO from "../components/seo"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const AboutDesc = styled.h2`
  font-family: "sofia", sans-serif;
  /* font-weight: 300; */
  line-height: 1.45;
  max-width: 560px;
  font-size: 0.8em;
  color: #444452;
`

function AboutMe() {
  return (
    <div style={{ marginTop: `80px` }} id="test-id">
      <SEO title="About" />
      <img className="abt-svg" src={svg} alt=""></img>
      <AboutDesc className="abtxt">
        Hello!{" "}
        <span class="wave">
          {" "}
          <img src={wavemoji} width="24" alt="" style={{ margin: `0` }} />
        </span>
      </AboutDesc>
      <div style={{ marginTop: `50px` }}></div>
      <AboutDesc>
        I'm <span className="name">Sai Sumanth,</span> a design-minded front-end
        web developer, UI/UX Designer &amp; Firebase Lover. People find me to be
        an upbeat, self-motivated team player with excellent communication
        skills.
        <br />
        <br />
       🛠⚒ DESIGNING THIS PAGE WILL BE UPDATED SOON....
      </AboutDesc>

      {/* <git-widget data-username="movingmelody"></git-widget> */}
      <git-widget data-username="movingmelody"></git-widget>
      <script
        src="https://unpkg.com/github-devprofile@2/dist/card.component.min.mjs"
        type="module"
      ></script>
    </div>
  )
}

export default AboutMe
