import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './footer.css';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';
import Mail from './mail.svg';

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
        <span>
          <a href="https://github.com/Sai7xp">
            {' '}
            <img className="social-svg-image" src={github} alt=""></img>
          </a>
          <a href="https://twitter.com/Sai7xp">
            {' '}
            <img className="social-svg-image" src={twitter} alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/sai7xp/">
            {' '}
            <img className="social-svg-image" src={linkedin} alt=""></img>
          </a>
        </span>
      </div>
      <span className="contact-list">
        © 2018-{new Date().getFullYear()} {data.site.siteMetadata.author}
      </span>
    </footer>
  );
};

export default Footer;
