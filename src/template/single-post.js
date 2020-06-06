import React from "react"
import { Link, graphql } from "gatsby"
import "./single-post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const summu = this.props.data.file.birthTime
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginTop: -2,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
            <span
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginTop: -2,
                marginBottom: rhythm(1),
              }}
            >
              {post.timeToRead} min read
            </span>
            <span
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginTop: -2,
                marginBottom: rhythm(1),
              }}
            >
              {summu}
            </span>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <footer
          style={{
            textAlign: `center`,
            marginTop: `40px`,
            bottom: `0`,
            fontSize: `0.7em`,
            fontFamily: `"Montserrat",sans-serif`,
            color: `rgb(51, 72, 101)`,
          }}
        >
          © {new Date().getFullYear()} | Designed by Sumanth.
        </footer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    file(
      extension: { eq: "md" }
      relativePath: { eq: "Firebase Auth/index.md" }
    ) {
      birthTime(fromNow: true)
    }
  }
`
