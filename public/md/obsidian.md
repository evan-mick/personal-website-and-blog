---
title: "Markdown"
description: "A self-indulgent musing about notes organization, Obsidian, and Markdown files"
date: "2025-01-26"
lastUpdated: "2025-01-26"
img: "/blog/markdownblog.jpeg"
show: true
---


## Markdown, Organization, and Simplicity. 

I have recently settled on organizing my life through Obsidian and syncing wtih Git. Doing so has made me reflect a lot on simplicity, organization, and how personal it is. To those interested, I think there's some interest going through my background to inform thinking about it.

## My History With Notes

I started programming in 8th grade. There, I also was very interested in gaming, 
Where and how to brainstorm ideas and how to sync files across different computers is something I've dealth with for awhile.
I have memories of that time working on tons of small projects and needing to sync them across my Mac and Windows OS's. 
I would leave my computer on overnight, and Google Sync would sync over 100 GB of data on some days including many of my documents, notes, exports, full game projects, etc. I would on many nights fall asleep to the roaring fan of my Macbook and breath in the air filtered through my laptops airducts.  

Back in school, I started taking notes on Google docs, usually, I would have one big doc with everything for a class that I'd take notes on. 
This was often sufficient but had problems. Firstly, I was constantly switching between my school email and my personal one, and when I graduated, it was a hassle to sync everything over. Ownership was a persistant and annoying problem. Also, Google always being online meant it was fickle. If I lost connection I could not access or edit said notes. It was also slow, and quite sluggish, and filled with features that were not always helpful.

My Senior year for some of my classes I went over to the good ole notes app, which I had already used for many a small note, brainstorming ideas, songwriting, etc.This was an improvement. Not only could I do things on and offline, and everything would sync automatically, but it was easy to access stuff on my phone (more so than Google at least). It also was much quicker to type. However, there were issues. The syncing was not perfect, occassionally, a note would get deleted in the process, which was problematic at a few key times. I believe once a large note of mine disappeared, without a good easy way to recover it. Also, possibly most importantly, I could not use the notes on my Windows. This wasn't a huge issue as I mostly used Windows for gaming and could look on my iPhone while using it in a pinch, but still, that was not great. Still, the notes app served me for about 2 years as I kept using it in college until my Spring semester Freshman year. 

There, I discovered Notion (or rediscovered it, but thats a digression). I decided to commit, I put my To Do on there, and made folders for all my classes. I even tried using the templates, and overall, it went well. My phone, ipad, windows, and mac could all seamlessly use the same workspace, and I was able to somewhat easily put all my thoughts on there. However, my persistent issue is that Notion has a _ton_ of friction. To add a note, its not always clear where to do so. Yes you can just put it in another note, but its always felt odd to me that notes are both folders and notes themselves, and has led to some confusing using it. Also, it suffers from having too much. There are so many features in notion, so many templates, its bloated. All I wanted was folders and files and maybe some extra functionality. But whenever I would make use of the extra things, it always added unnecessary files, hidden features, and odd extra things I did not want to spend the time learning. And while it was sort of able to be used offline, not across all files, so that issue from Google Docs still remained. Still, I used this for over a year, and put much of my life on it. It was helpful.

All of that was a precursor to what I have finally settled on. For awhile, I had started watching No Boilerplate, mainly to learn more about Rust, but eventually I watched is video about Obsidian. I had felt it was unneccesary and that it was likely just a Notion downgrade (and in some ways it is). I was not about to pay for syncing for a service I already had. So I didn't convert. However, while in Hong Kong abroad Spring 2024, I took a distributed systems class. To turn in projects you had to SSH into the schools Linux servers. I forgot at the time that VS Code has a way of easily doing that and navigated workspaces, so I was dealing with the work flow of constantly syncing a git repository between my local and school computer to test code. It was miserable. So I decided to use vim on the school's computers while SSH-ing, and slowly picked up the VIM bindings. Last time I tried learning Vim a full year before, I quit because I found it overwhelming. But now with some previous experience, it wasn't as bad, and I realized I could learn it if I treated it like learning a language and fully immersed myself into it. So I decided to try and take notes using it, which Notion did not allow, which ultimately resulted in me downloading Obsidian, seeing it had that ability, and taking all my notes using it. It went really well, but I was only using it on ocassion and hadn't fully committed. But eventually, upon discovering "remotely save," I slowly fully took it in. For the rest of the semester, I took notes in it whereever I could, got more into over the summer, and by Fall had everything I use in my daily life on it. I managed all my personal life, school, notes, and work in Obsidian all using Markdown. 

The last issues I had were with Remotely Save, which is inconsistent and has some of the same syncing issues that Notion has but they cannot be addressed without aying extra. So I finally switched over to Git, and I feel my setup is pretty much perfect. There is no friction to making a markdown file, in addition to easily being able to do it in obsidian, I write this using Neovim, and now instead of having to open Obsidian just to sync my files, I can quickly add whatever I need to git and push it. All my notes are securely stored online, meaning I can access my life from any computer with git on it, including my Windows, Mac, and recent Linux addition. It also, surprisingly, works on iPhones and iPads with a little setup. 

So that is my recommendation. If you are a programmer who knows how git works with any demand for cross-OS functionality, Obsidian with Git could be the way to go. Its trivial to add more notes, which means I'm taking far more than I was before. And if you ever have any issues, its trivial to go to a previous commit or download old files off of github, which is rare because markdown files are very easy for git to merge. 

I feel incredibly comfortable and excited with this setup, and because Obsidian is so extensible, I can manage my whole life on one desktop app (and/or Neovim!) instead of having to go between 5 different slow, sluggish web apps like Notion, G-Cal, etc.

## My new obsession with Markdown

Markdown is beautifully simple, it is just text, with just enough extra features to make things look nice, and the extensiblity to add any feature you want in applications like Obsidian. Any text editor can look at it, and its *tiny*. All my notes, thoughts, daily musings, etc. are in ~200 mb, and its only that large because I also have many pdfs and pictures in my obsidian vault, it'd likely be more aroun 30-50mb if it was just text. This is in stark contrast to bloated docx files which can often be a lot more. They also are easy to store and merge as they're just text. 


### Product Management in Markdown

Thinking about how conveinent I find this has also got me thinking about how I work in organizations. At Epic Games, I used a combination of Miro, Jira, G-Cal, and a few internal websites. For my next independent project I work with other people on, I think PM with markdown would work really well. 

Every to do item or "ticket" could be its own md file, organized on one central page with certain plugins or mini scripts, or just simple folder drag and drop organization. 

While before I thought Miro might be necessary, Obsidian now has canvases that basically do the same thing, and you can get plugins to make it realtime multiplayer which also eliminates the need for google docs.

It sounds really nice having _one_ source of truth from _one_ application and I think its worth exploring. The only downside is there's definitely a learning curve, especially if you're not a programmer. 


## Philosophically, what is simplicity?

Once I had settled upon this setup,  realized how insane it seems. 
One of my friends was an avid Notion user, and it was crazy trying to explain to them the benefits of this setup. 

Simplicity is dependent on how familiar you are with how something works. 
Layers of abstraction allow you to get to an end result quicker, but if you take the time to peel them back, they often act as barriers rather than streamliners.
As soon as you're aware of how something works, if the time required to do it is roughly the same, it usually feels better and is easier to work without the abstractions.

I couldn't stand Notion because I didn't have control over my files. There was tons of friction, and everything being online was a huge barrier for me as someone who likes to work offline and in my own text editors. For someone who doesn't care about this, Notion is perfect. You don't have to worry about how version control software works (or touching a terminal for god's sake). While learning git is actually quite easy, it could take an afternoon, mentally it is taxing and takes much longer to feel comfortable with it and know it will enough to troubleshoot if something goes wrong. 

Simplicity is fundamentally reliant on knowledge, this sounds obvious and even ridiculous to point out, but radically being aware of it for yourself and products and software you make is very important. 

Notion did not work for me because it was not built for me, I am a programmer who likes to take many simple notes, Notion is for people who love organization, people who love a GCal and always color coded their notebooks and used highlighters for their notes since the 5th grade. Apple Notes is for people who are really content with the Apple eco-system and won't make a change soon and just need something simple. I'm not sure who likes Google Docx, but its conveinent and familiar. 


## All in all

This post is intentionally a bit aimless. Its an amalgamation of thoughts I've been having around this, considering you are here, I hope you have found it somewhat interesting.
