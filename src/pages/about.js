// @ts-check
import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={['sai7xp info', 'sai sumanth info', 'about sai sumanth', 'about sai7xp', 'sai7xp']} />
    <h2>About Me</h2>
    <div className="post-content">
      <p>
        Hi <span className="wave">👋</span>
      </p>
      <p>
        I'm Sai Sumanth, a software engineer from India. I specialize in building backend systems, microservices,
        RESTful web servers. I also have experience in building mobile apps using Flutter.
        {/* I built 
        Take a look at GitHub to
        see what I've built over the past few years.{' '} */}
      </p>
      <div style={{ height: '2px' }}></div>
      <p>
        {' '}
        Checkout my <a href="https://github.com/Sai7xp/learn-golang">learn-golang</a> repository where I regularly
        commit about golang core-concepts and design patterns.
      </p>
      <div style={{ height: '2px' }}></div>
      <p>
        {' '}
        I use Golang and Java for backend development and "leetcoding". I love discussing computers, cats, fitness and a
        bit of zen 🧘‍♂️
      </p>
      {/* <br /> */}
      {/* Projects Section */}
      {/* <div className="projects">
        <h2>Things I've Built</h2>
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to="http://www.aaronsw.com/weblog/rawnerve">
              Deploy Maven - Deployment Tool
            </Link>
          </li>
          <p className="project-desc">A deployment tool built using Golang and Microservices architecture.</p>
          <li>
            <a href="https://worrydream.com/LearnableProgramming/">GitHub Profile - UI Web Component</a>
          </li>
        </ul>
      </div> */}

      {/* <br />
      Reads Section
      <h2>What I'm doing now</h2>
      <p style={{ color: '#64748b', fontSize: '0.8em', margin: '0px' }}>Updated 1st Sep, 2024</p>
      <ul>
        <li>Working full time as backend dev</li>
        <li>Exploring system design & distributed systems</li>
        <li>Learning Algorithms</li>
        <li>Workout</li>
      </ul> */}

      <br />
      {/* Reads Section */}
      <h2>Recent reads that I enjoyed</h2>
      <ul>
        <li>
          <a href="http://www.aaronsw.com/weblog/rawnerve">Raw Nerve by Aaron Swartz</a>
        </li>
        <li>
          <a href="https://worrydream.com/LearnableProgramming/">Bret Victor's Learnable Programming</a>
        </li>
        <li>
          <a href="https://www.navalmanack.com/">Almanack of Naval Ravikant Book</a>
        </li>
      </ul>
      {/* <p>
        <a href="https://coherent-candle-2b4.notion.site/3a6ebe08cee8421ba32cb8d44b0c9744?v=6a8e178c5ae2435fb7022a75f23664c1&pvs=4">
          My Book Shelf
        </a>
      </p> */}
    </div>
  </Layout>
);

export default IndexPage;
