---
layout: post.njk
title: Storing data on the client side
tags: post
date: Last Modified
---

## {{ title }}

If you are reading this, you may be wondering if it's possible to store data of your web-application without using a remote database. In short - yes.
But first of all we have to mention the cases when it's reasonable to do so:

  1. It's not necessary for the user to access this data on a different browser or device.
  2. The data is not sensetive nor personalized.
  3. The data may be removed by a handy user and this won't damage the application or user experience.

If you are fine with the conditions above, let's get get up on this actually a wide but, if you ask me, a very underrated functionality of modern browsers.

### Session and Local storage

These both are properties of the `window` interface, both store data in the user's browser. The main difference is that `sessionStorage` is used to store data within the *page session* e.g. when you need it to be removed once the page is closed, while `localStorage` has no expiration time (for non-incognito mode).
