import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Articles from "../components/articlesList"
import About from "../components/aboutme"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div style={{ marginTop: `78px` }}></div>
      <Intro />
      <Articles />
      <About />

      <footer style={{
         textAlign: `center`,
         marginTop:`30px`,
          bottom:`0`,
          fontSize:`0.9em`,
          fontFamily:`"GIlroy",sans-serif`,
          color:`var(--tgreen)`
           }}
           >
        © {new Date().getFullYear()} | Built with GatsbyJS. <br/> Designed by Sumanth.
      </footer>
    </div>
  </Layout>
)

export default IndexPage
