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
      <footer style={{
         textAlign: `center`,
         marginTop:`40px`,
          bottom:`0`,
          fontSize:`0.75em`,
          letterSpacing:`0.25px`,
          // fontFamily:`"Montserrat",sans-serif`,
          color:`rgb(51, 72, 101)`
           }}
           >
        © {new Date().getFullYear()} | Designed by Sumanth.
      </footer>
    </div>
  </Layout>
)

export default IndexPage
