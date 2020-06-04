import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticlesList from "../components/articlesList"
export default function blog() {
  return (
    <Layout>
      <SEO title="Blog" />
      <ArticlesList/>
    </Layout>
  )
}
