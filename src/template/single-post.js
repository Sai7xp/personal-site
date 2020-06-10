import React from "react"
import { Link, graphql } from "gatsby"
import "./single-post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import author from "../images/avatar.png"
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
          
          <h1
            className="article-title"
            style={{
              // color:`var(--theme)`,
              marginBottom: `4px`,
              // fontFamily: `"SAns",sans-serif`,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <img
                    src={author}
                    alt=""
                    width="24"
                    height="24"
                    style={{
                      verticalAlign: `middle`,
                      margin: `0`,
                      borderRadius: `100%`,
                      objectFit: `cover`,
                    }}
                  /> &nbsp;
                  
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              color: `#90a4ae`,
              // color: `#6f6f6f`,
              fontSize: `0.84rem`,
            }}
          >
           {post.timeToRead} min read ~ {post.frontmatter.date}
          </small>
          {/* </header> */}
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{
              marginTop: `2.2rem`,
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
              <li
                style={{
                  fontSize: `16px`,
                }}
              >
                Previous
                <br />
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li
                style={{
                  fontSize: `16px`,
                }}
              >
                Next
                <br />
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
        imagepath
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
