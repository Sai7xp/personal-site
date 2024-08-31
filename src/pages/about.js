// @ts-check
import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import ProjectPage from './portfolio';

const IndexPage = () => (
  <Layout>
    <h2>Who am I ?</h2>
    <SEO title="About" keywords={['sai7xp info', 'sai sumanth info', 'about sai sumanth', 'about sai7xp', 'sai7xp']} />
    <div className="post-content">
      <p>Hey, I am Sai Sumanth, a software engineer From India. I primarily work on backend-systems. </p>

      <h2>Recent reads that I enjoyed</h2>
      <ul>
        <li>
          <a href="http://www.aaronsw.com/weblog/rawnerve">Raw Nerve by Aaron Swartz</a>
        </li>
        <li>
          <a href="https://worrydream.com/LearnableProgramming/">Bret Victor's Learnable Programming</a>
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
