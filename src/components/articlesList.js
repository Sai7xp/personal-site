import React from "react"
import { Link } from "gatsby"
const articlesList = () => {
  return (
    <div style={{ marginTop: `40px`, fontFamily: `"sans",sans-serif` }}>
      <h4
        className=".article-head"
        style={{
          fontFamily: `"Inter", sans-serif`,

          margin: `0`,
          display: `flex`,
          marginBottom: `15px`,
          color: `#444452`,
          fontSize: `18px`,
          textTransform: `uppercase`,
        }}
      >
        {/* <span>Latest Articles</span> */}
      </h4>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        01. Recent Articles
      </p>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `40px 2fr auto`,
          marginBottom: `30px`,
        }}
      >
        <img
          src="https://miro.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png"
          alt=""
          width="30"
          height="30"
          style={{
            verticalAlign: `middle`,
            margin: `0`,
            borderRadius: `100%`,
            objectPosition: `center`,
            objectFit: `cover`,
          }}
        />
        <p
          style={{
            // display:`inline`
            margin: `0`,
            lineHeight: `1.2`,
            color: `var(--theme)`,
            fontSize: `1.2rem`,
          }}
        >
          <a href="https://sumanth.netlify.app/javascript-symbols-tour/">
            What exactly are SYMBOLS in Javascript ?{" "}
          </a>
          <br />{" "}
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,

              fontSize: `0.7rem`,
            }}
          >
            March 23, 2021 ~ 7 min read
          </small>
        </p>
      </div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `40px 2fr auto`,

          marginBottom: `30px`,
        }}
      >
        <img
          src="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/03/Apple-Logo-Colores-1024x576.jpg"
          alt=""
          width="30"
          height="30"
          style={{
            verticalAlign: `middle`,
            margin: `0`,
            borderRadius: `100%`,
            objectPosition: `center`,
            objectFit: `cover`,
          }}
        />
        <p
          style={{
            // display:`inline`
            margin: `0`,
            color: `var(--theme)`,
            lineHeight: `1.2`,
            fontSize: `1.2rem`,
          }}
        >
          Implement dark mode like a pro in Gatsby
          <br />{" "}
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,

              fontSize: `0.7rem`,
            }}
          >
            Feb 23, 2018 ~ 7 min read
          </small>
        </p>
      </div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `40px 2fr auto`,

          marginBottom: `10px`,
        }}
      >
        <img
          src="https://marlom.dev/images/posts/upgrade-to-react-17-and-webpack-5/header.png"
          alt=""
          width="30"
          height="30"
          style={{
            verticalAlign: `middle`,
            margin: `0`,
            borderRadius: `100%`,
            objectPosition: `center`,
            objectFit: `cover`,
          }}
        />
        <p
          style={{
            // display:`inline`
            margin: `0`,
            color: `var(--theme)`,
            lineHeight: `1.2`,
            fontSize: `1.2rem`,
          }}
        >
          <a href="https://sumanth.netlify.app/module-bundlers-webpack/">
            What are Module Bundlers ? How to configure Webpack ?
          </a>{" "}
          <br />{" "}
          <small
            style={{
              // textAlign:`center`,
              color: `var(--textNormal)`,
              marginTop: `0`,
              marginBottom: `0`,

              fontSize: `0.7rem`,
            }}
          >
            Feb 18, 2021 ~ 2 min read
          </small>
        </p>
      </div>
      <a
        style={{ fontSize: "14px", paddingTop: "0px", marginTop: "0px" }}
        href="https://sumanth.netlify.app/blog"
      >
        read more articles here
      </a>
      {/* <button
        style={{
          border: `1px solid #F7B801`,
          borderRadius: `8px`,
          padding: `4px 10px`,
          margin:`0 auto`,

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
      </button> */}

      <h4
        className=".article-head"
        style={{
          fontFamily: `"Inter", sans-serif`,
          margin: `0`,
          display: `flex`,
          marginBottom: `15px`,
          color: `#444452`,
          color: `var(--theme)`,
          fontSize: `18px`,
          textTransform: `uppercase`,
        }}
      ></h4>
      <p
        style={{
          fontSize: "20px",
          // color:`var(--theme)`
        }}
      >
        02. Projects :<br></br>
        <small style={{ fontSize: "14px" }}>
          will be updated soon.. for now visit github
        </small>
      </p>
      <p
        style={{
          fontSize: "20px",
          // color:`var(--theme)`
        }}
      >
        03. Technologies I work with:
      </p>
      <ul
        style={{
          display: `grid`,
          marginLeft: `50px`,
          gridTemplateColumns: `repeat(2, minmax(140px, 200px))`,
        }}
        className="tech"
      >
        <li>Flutter</li>
        <li>Gatsby Js</li>
        <li>MERN Stack</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Figma </li>
      </ul>
    </div>
  )
}

export default articlesList

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
