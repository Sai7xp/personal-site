import React from "react"
import { Link, graphql } from "gatsby"
import "./single-post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import author from "../images/avatar.png"
// import "github-devprofile"
import {Helmet} from "react-helmet"
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    // const summu = this.props.data.file.birthTime
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
            maxWidth: `780px`,
            margin: `0 auto`,
            padding: `${rhythm(1.56)} ${rhythm(3 / 4)}`,
            paddingTop: `0`,
          }}
        >
          <h1
            className="artitle"
            style={{
              marginBottom: `4px`,
              // color:`var(--theme)`
            }}
          >
            {post.frontmatter.title}
          </h1>
          <img
            src={post.frontmatter.author}
            alt=""
            width="24"
            height="24"
            style={{
              verticalAlign: `middle`,
              margin: `0`,
              borderRadius: `100%`,
              objectFit: `cover`,
            }}
          />{" "}
          &nbsp;
          <small
            style={{
              color: `#90a4ae`,
              fontSize: `0.84rem`,
            }}
          >
            {post.timeToRead} min read ~ {post.frontmatter.date}
          </small>
          &nbsp;
          <a href="https://twitter.com/MovingMelody">
            <img
              src="https://image.flaticon.com/icons/svg/733/733635.svg"
              alt=""
              width="16"
              height="16"
              style={{
                verticalAlign: `middle`,
                margin: `0`,
                opacity: `0.6`,
                objectFit: `cover`,
              }}
            />
          </a>
          <a href="https://wa.me/919642183590/?text=Nice, article dude. Let's work together">
            <img
              src="https://image.flaticon.com/icons/svg/1384/1384095.svg"
              alt=""
              width="14"
              height="14"
              style={{
                verticalAlign: `middle`,
                margin: `0`,
                marginLeft: `10px`,
                opacity: `0.6`,
              }}
            />
          </a>
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
          <h2>Tags:</h2>
          <button
            style={{
              border: `1px solid #F7B801`,
              borderRadius: `8px`,
              padding: `4px 10px`,
              margin: `0 auto`,

              fontSize: `12px`,
              backgroundColor: `#FFF7DD`,
              backgroundColor: `transparent`,
              color: `#F7B801`,
            }}
          >
            #javascript
          </button>
          <button
            style={{
              border: `1px solid #4ad991`,
              borderRadius: `8px`,
              padding: `4px 10px`,
              // margin:`0 auto`
              marginLeft: `15px`,
              fontSize: `12px`,
              backgroundColor: `#daf7eb`,
              backgroundColor: `transparent`,
              color: `#4ad991`,
            }}
          >
            #flutter
          </button>
          <button
            style={{
              border: `1px solid #8280ff`,
              borderRadius: `8px`,
              padding: `4px 10px`,
              marginLeft: `15px`,
              fontSize: `12px`,
              backgroundColor: `#ebe7ff`,
              backgroundColor: `transparent`,
              color: `#8280ff`,
            }}
          >
            #gatsbyjs
          </button>
          <nav style={{ marginTop: `15px` }}>
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
                
                <br />
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <Helmet>
          <script src="https://unpkg.com/github-devprofile@1/dist/card.component.min.mjs" type="module"></script>
        </Helmet>
        
          <div style={{ margin: `auto`, display:`flex`, justifyContent:`center`}}><git-widget data-username="movingmelody"></git-widget></div>
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
        author
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
