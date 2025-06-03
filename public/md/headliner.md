---
title: "The Headliner"
description: "The Headliner is a news summarizing and aggregating website"
date: "2025-06-02"
lastUpdated: "2025-06-02"
img: "/projects/headliner.png"
show: true
---
## [Link to The Headliner](https://theheadliner.news)
## Tools: JS/HTML/CSS, Go, SQL, Docker, Cloudflare tunnel, Fly.io, Google Cloud Services, Google Gemini

Browsing the news can be frustrating. Either you browse headlines and don't get enough information, or you have to go through entire articles.  
The Headliner is a side project of mine dedicated to being the in-between experience. It uses RSS feeds, web scraping, templating, and Google's Gemini to scrape and summarize news articles and present them in a digestible way.

The website is designed to be server-side rendered periodically with a new batch of articles every few hours, and also to be as lightweight as possible to be accessible from low-service connections. Every few hours, it scrapes a list of websites, summarizes articles from them, stores them in a database, then server-side renders a website based on the articles, and serves the website to HTTP clients.

I use Docker to containerize the website to allow for easy hosting from any device. I originally used Azure's container instances to host the site, but ran into some issues, and am now using Fly.io to host the container. I had a ton of fun and learned a lot from this project.

