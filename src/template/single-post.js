import React from "react"
import { Link, graphql } from "gatsby"
import "./single-post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import author from "../images/site-icon.png"
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const summu = this.props.data.file.birthTime
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <Layout>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
        </Layout>
        <div
          style={{
            maxWidth: `800px`,
            margin: `0 auto`,
            padding: `${rhythm(1.56)} ${rhythm(3 / 4)}`,
            paddingTop: `0`,

          }}
        >
          {/* <article> */}
          {/* <header> */}
          <h1 className="article-title"
            style={{
              // marginTop: rhythm(1),
              marginTop: 0,
              fontSize: `1.6em`,
              color: `var(--theme)`,
              // textAlign:`center`
            }}
          >
            {post.frontmatter.title}
          </h1>
          <span
            style={{
              // ...scale(-1 / 5),
              fontSize: `12px`,
              display: `block`,
              // marginTop: `4px`,
              color:"#444452",
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}{" "}
            <img
              width="11"
              style={{
                margin: `0`,
                marginLeft: `10px`,
              
              }}
              src="https://image.flaticon.com/icons/svg/1827/1827379.svg"
              // src={author}
              alt=""
            />{" "}
            {post.timeToRead} min read
          </span>
          {/* </header> */}
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          />
          <div
            style={{
              marginBottom: rhythm(1),
              backgroundColor: `var(--theme)`,
              width: `100%`,
              height: `2px`,
              opacity: `0.6`,
            }}
          />
          {/* </article> */}

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
              <li style={{
                fontSize:`16px`,
              }}>Previous<br/>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li style={{
                fontSize:`16px`,
              }}>Next<br/>
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
        </div>
      </div>
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
