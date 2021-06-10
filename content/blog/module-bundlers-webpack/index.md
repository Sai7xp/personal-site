---
title: What are Module Bundlers ? How to configure Webpack ?
date: "2021-02-18T13:15:03.284Z"
tags: ["bundlers", "web", "javascript"]
description: "Lets see how we can take advantage of them to build large scale applications."
imagepath: "https://marlom.dev/images/posts/upgrade-to-react-17-and-webpack-5/header.png"
author: "https://sumanth.netlify.app/static/avatar-a900fb7f56d08d8331e5b8b67b1a09f7.png"
---

####What are Module Bundlers ? How we can take advantage of them to build large scale applications.
Hey! 🐱
First let's understand when Module Bundlers can be used. 
Def :- Module Bundlers can be used to bundle our JavaScript files, images, styles, and fonts together into single folder.

🌼 
When we are getting started with Web Development we use these basic 3 things : HTML, CSS, JS. But when we dive into it we might replace JS with TypeScript, HTML with React Library, CSS with Sass.
In addition to the above things we might also inject things like firebase, npm packages, D3 Js etc. Many of the injected dependencies might use common `Js` which isn't going to work with modern `es` syntax. We might get errors like - `Uncaught ReferenceError : require is not defined`. And even if we manage the things to get it work we might end up with a massive JS file which then needs to be minified and broken into smaller files to reduce the load time.

**So** to solve all the above problems **module bundlers** like webpack, parcel, rollup, snowpack etc., came into existence to make the process easy and error free.
Okay, now we know why these are introduced but the basic thing they do is taking multiple JS files and combine them into a single large file. which can be used later to load our app in browser. 

**Okay enough theory!** Let's 🛠️ configure Webpack from scratch and write some code (>‿◠)✌

🌻 Follow the below steps to configure Webpack.

####1. Create an entry Javascript file
Create index.js in the `src` folder. This `src/index.js` will be the entry file because everything starts from here.
```Javascript
// src/index.js
console.log(
"lets use lodash package to convert this plain text to kebab-case text"
);
```
Now create  `public/index.html` file and import the `index.js` file in it.
Folder structure 👇🏻
![folder structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/id2tcizuf5huinsxewxv.png)
`index.html`
```HTML
<!-- public/index.html -->
<head>
    <meta charset="UTF-8">
    <title>Configure Webpack</title>
    <script src="../src/index.js"></script>
</head>
<body>
    <p>and some text here</p>
</body>
```
Open the html file and you should see the output like :
![console output](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t3nd5nvigi5kgzfn9zs3.png)

####2. Install `lodash` npm package
Before installing the `lodash` package let's first create `package.json` file in the project folder using the command `npm init -y`.
🌻
Install `lodash` using the following command `npm i lodash`.

still writing wil be updated soon