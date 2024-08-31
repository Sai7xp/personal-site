/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React, { useEffect } from 'react';

// You can delete this file if you're not using it
require('prismjs/themes/prism-tomorrow.css');

export const onRouteUpdate = () => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach((heading) => {
    // const redHash = document.createElement('span');
    // redHash.textContent = '# ';
    // redHash.style.color = '#8280ff';
    // redHash.classList.add('red-hash');

    // // Insert the red hash span at the beginning of the heading
    // heading.insertBefore(redHash, heading.firstChild);
  });
};
