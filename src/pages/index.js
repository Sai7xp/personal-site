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
      <Articles/>
      <About/>
      
      <footer>
        {/*  © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </div>
  </Layout>
)

export default IndexPage
