---
title: Let's see Quest for the Perfect Dark Mode
date: "2020-02-22T13:15:03.284Z"
description: "We'll need some state! It's up to you how to manage state, but in this example, we'll use React context."
imagepath: "https://www.taniarascia.com/static/d46d5640598e2cbc03373885d2226c51/de03e/cookie.png"
author: "https://sumanth.netlify.app/static/avatar-a900fb7f56d08d8331e5b8b67b1a09f7.png"
---


# stupidly-simple-blog [![npm version](https://badge.fury.io/js/stupidly-simple-blog.svg)](https://badge.fury.io/js/stupidly-simple-blog)

A really simple flat file blog thing

![Sample](https://cloud.githubusercontent.com/assets/175278/22441507/9525f26c-e72f-11e6-877e-67b83101c1a7.gif)

## Another markdown blog project!?
I wanted to write a blog post, so naturally had to make something that'd turn markdown into html. Some requirements were:

* Watch mode
* Compiled code blocks
* No runtime scripts necessary
* Themeable
* Templates

## Usage
```
  $ <filename>

  Options
    --template, -t  The template file to use (must be handlebars)
    --watch, -w  Watch files for changes
    --stdout, -s  Output the html to stdout
    --output, -o  The .html file name (will be written to if stdout not specified)
    --title, -t  The title for the html file (filename used instead)

  Example
    $ simple-blog my-amazing-post.md
    $ simple-blog --watch --template main.mustache my-amazing-post.md
```