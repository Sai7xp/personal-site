import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import svg1 from "../images/bg2.svg"
class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges || data.allFile.edges
    // const posttime = this.props.data.allFile.edge

    return (
      <Layout>
        <img
          className="bg-svg2"
          style={{
            opacity: `0.08`,
            zIndex: `-1`,
          }}
          src={svg1}
          alt=""
        ></img>
        <SEO title="Blog" />
        <div style={{ marginTop: 36, wordBreak: `` }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} style={{ marginBottom: `40px` }}>
                <div
                  style={{
                    display: `grid`,
                    gridTemplateColumns: `50px 2fr auto`,
                    marginBottom: `10px`,
                  }}
                >
                  <img
                    src="https://create-react-app.dev/img/logo-og.png"
                    src={node.frontmatter.imagepath}
                    alt=""
                    width="40"
                    height="40"
                    style={{
                      verticalAlign: `middle`,
                      margin: `0`,
                      borderRadius: `100%`,

                      objectFit: `cover`,
                    }}
                  />
                  <p
                    style={{
                      margin: `0`,
                      lineHeight: `1.0`,
                      fontFamily: `"sans", sans-serif`,
                      fontSize: `1.2rem`,
                    }}
                  >
                    <a
                      href={node.fields.slug}
                      style={{
                        color: `var(--theme)`,
                        // color: `#5183f5`,
                        margin: `0`,
                        fontSize: `1.22rem`,
                        textRendering: `optimizeLegibility`,
                        lineHeight: `1.0`,
                      }}
                    >
                      {title}
                    </a>
                    <br />{" "}
                    <small
                      style={{
                        // textAlign:`center`,
                        color: `var(--textNormal)`,
                        color: `#90a4ae`,
                        fontSize: `0.75rem`,
                      }}
                    >
                      {node.frontmatter.date} ~ {node.timeToRead} min read
                    </small>
                  </p>
                </div>
                <p
                  style={{
                    color: `var(--txtColor)`,
                    // color: `#454545`,
                    color: `#6f6f6f`,
                    marginTop: `0px`,
                    fontFamily: `"sans", sans-serif`,
                    fontSize: `0.9rem`,
                    lineHeight: `1.3`,
                  }}
                >
                  {node.frontmatter.description}
                </p>
              </article>
            )
          })}
        </div>
        <Link to="/tags">Tags</Link>
        {/* <a href="" className="cta">
          <span>Click Me</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a> */}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: { extension: { eq: "md" } }
      sort: { order: ASC, fields: birthTime }
    ) {
      edges {
        node {
          id
          birthTime(fromNow: true)
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            imagepath
          }
        }
      }
    }
  }
`
