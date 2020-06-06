import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges || data.allFile.edges
    // const posttime = this.props.data.allFile.edge

    return (
      <Layout>
        <SEO title="Blog" />
        <div style={{ marginTop: 24 }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} style={{ marginBottom: 48 }}>
                {/*  <header> 
                <h2
                  style={{
                    marginBottom: 0,
                    fontFamily: `Tajawal, sans-serif`,
                  }}
                >
                  <Link
                    style={{ boxShadow: `none`, textDecoration: `none` }}
                    to="/"
                  >
                    {title}
                  </Link>
                </h2>
                <small
                  style={{
                    color: "var(--secondaryText)",
                    fontSize: "0.9rem",
                  }}
                >
                  {node.frontmatter.date}
                </small> */}

                <a
                  href={node.fields.slug}
                  style={{
                    // textAlign:`center`,
                    color: `var(--theme)`,
                    margin: `0`,
                    fontSize: `1.4rem`,
                    textRendering: `optimizeLegibility`,
                    fontWeight: `bold`,
                    lineHeight: `1.0`,
                    // fontFamily: `"Apercu",monospace`,
                  }}
                >
                  {title}
                  {/* 🍛 */}
                </a>
                <br />
               
                    <small
                      style={{
                        // textAlign:`center`,
                        color: `var(--textNormal)`,
                        marginTop: `0`,
                        fontSize: `0.8rem`,
                      }}
                    >{node.frontmatter.date}
                      {/* {} */}
                      {/* {this.props.data.allFile.edges.node.birthTime} */}
                    </small>
                  
                <small
                  style={{
                    // textAlign:`center`,
                    color: `var(--textNormal)`,
                    marginTop: `0`,
                    fontSize: `0.8rem`,
                  }}
                >
                  {node.birthTime}
                  {/* {this.props.data.allFile.edges.node.birthTime} */}
                </small>
                <small
                  style={{
                    // textAlign:`center`,
                    color: `var(--textNormal)`,
                    marginTop: `0`,
                    marginLeft: `10px`,
                    fontSize: `0.8rem`,
                  }}
                >
                  {node.timeToRead} min read
                </small>
                <p
                  style={{
                    // textAlign:`center`,
                    color: `var(--secondaryText)`,
                    // marginTop: `8px`,
                    // marginBottom: `8px`,
                    fontSize: `1rem`,
                    lineHeight: `1.3`,
                    fontFamily: `'Quicksand',sans-serif`,
                  }}
                >
                  {node.frontmatter.description}
                </p>

                {/* </header> */}
                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    style={{ marginTop: 6 }}
                  />
                </section> */}
              </article>
            )
          })}
        </div>
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
          }
        }
      }
    }
  }
`
