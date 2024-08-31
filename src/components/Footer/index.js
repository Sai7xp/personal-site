import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './footer.css';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteMeta {
      site {
        siteMetadata {
          title
          author
          description
          social {
            github
            twitter
          }
        }
      }
    }
  `);

  return (
    <footer className="site-footer">
      <div className="footer-col">
        <span className="contact-list"> © {new Date().getFullYear()} | {data.site.siteMetadata.author}</span>
      </div>
    </footer>
  );
};

export default Footer;
