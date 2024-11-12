

import { redirect } from 'next/navigation';
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import ProjectDisplay from '@/components/ProjectDisplay';
import { AtlasSwingsProjLink, HeadlinerProj, HeadlinerProjLink, ShaderEngineProjLink, TetronProjLink } from '@/constants/projectData';

export default function Page() {

  //redirect('/dashboard');


  return (
    <div className="w-screen h-screen flex-col justify-center align-middle">
      <section>
        <h1 className="text-4xl md:text-8xl m-10 md:mx-48 xl:mx-96">
          I am <br /> <b>Evan Samuel Mickelson</b>
        </h1>
      </section>
      <section className="w-full">
        <div className="whitespace-pre-wrap m-10 md:mx-48 xl:mx-96">
          <p>
            I am a Computer Science and Economics student at Brown University, and I am well-versed in software engineering and product management.
            I am also a passionate game developer and musician. This website exists as a place for employers to see my experiences
            and for me to show off my software, music, and thoughts in a centralized place.
          </p>
          <br />
          <p>
            As a participant in Capitalism, I seek gainful employment.
            My latest attempt was from May to August of 2024.
            I am happy to say that, thanks to the purchasing of V-bucks from the credit cards of millions of parents worldwide,
            I was employed at Epic Games as a "Gameplay Programming Intern,"
            where I worked on Fortnite Festival using Unreal Engine and C++ on the Harmonix team.
          </p>
          <br />
          <p>
            From June to November of 2023, I worked at 2K Games as a "Software Engineering, Product Management Intern" (a bit of a mouthful, I know).
            There, I helped analyze the onboarding experience and costs of their backend services used across 2K's titles
            by incorporating them in my own Unreal projects, talking to customers, and undergoing market research.
          </p>
          <br />
          <p>
            At Brown University, I am part of the executive board for Brown RISD Game Developers. During my time there, I have contributed to the development of five video games, helped manage our yearly average of roughly 100 students, and taught other students how to use Unity and Unreal effectively.
            I have also been a TA for two computer science courses, Computer Graphics, and 2D Game engines.
          </p>
          <br />
          <p>
            The website you are seeing was made by *yours truly* using Next JS with Tailwind CSS. You can find the code for it <a className="underline text-blue-400" href="https://github.com/evan-mick/personal-website-and-blog">Here</a>
          </p>
        </div>
      </section>

      <section id="featured-projects" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Featured Projects</h4>
        </div>
        <div className="flex flex-wrap gap-16 p-12 justify-center">
          <ProjectDisplay linkTo={HeadlinerProjLink.linkTo} photoLink={HeadlinerProjLink.photoLink} desc={HeadlinerProjLink.desc} />
          <ProjectDisplay linkTo={ShaderEngineProjLink.linkTo} photoLink={ShaderEngineProjLink.photoLink} desc={ShaderEngineProjLink.desc} />
        </div>
      </section>
      <section id="skills overview" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Technical Skills Overview</h4>
        </div>
        <div className="mx-10 md:mx-48 xl:mx-96 mt-4">
          <p>I have been programming and creating games since before high school,
            and thus have a deep understanding of applied programming practices and experience with a wide range of languages.
            Here are some languages and tools I am familiar with, and where I made use of them.
          </p>
          <ul>

            <li className="mt-2"><b>Unreal Game Engine</b>: In the summer of 2024, I was at Epic Games. Specifically, I was an intern on the Harmonix team where I worked on Fortnite Festival, the "Guitar Hero" gamemode for Fortnite.
              There I extensively used C++, Blueprints, and many of Unreal's other features to create cheats, fix bugs, and to improve the developer and user experience.
              During my time at 2K games, I used Unreal Game Engine to explore the onboarding process for their internal games backend services.
              In the summer of 2022, I taught the engine to 30 teenagers at my time camp counselling at iDTech.
              I have also used the engine to help create US(FPS), a packaged themed first person shooter, in Brown RISD Game Developers.
              Lastly, I made a prototype map for the VR game Pavlov, as well as a VR fireplace simulator for the Brown 2023 hackathon.</li>
            <li className="mt-2"><b>Go:</b> I used Go to implement the RAFT distributed dictionary protocol for a distributed systems course.
              Along with that, I am using it for the backend of a news headline and summarizing website for webscraping, serverside rendering, API handling, and database access.</li>
            <li className="mt-2"><b>React, Typescript, CSS:</b> Along with using Next for this website.
              I have also made use of React for school projects in my school's software engineering course and for the frontend for a project in Brown's Entrepreneurship Club.</li>
            <li className="mt-2"><b>C++</b>: In Computer Graphics, I made a realtime renderer (using OpenGL), a software raytracer, and paint application using C++.
              In Computer Networks, I created an implementation of the IP and TCP protocol with virtual router and host nodes.
              In a joint final project between the two classes, I created a multiplayer Quake clone that utilized a custom built ECS and a game client-server architecture. It uses OpenGL for rendering.
              For it, I with 2 other people created physics, rendering, gameplay, and networking sytems.
              Lastly, for my computer systems course, I created Snake with custom levels,
              security and page table features for WeenseyOS (a unix-like OS project),
              and the logic for a key value store all using C++</li>
            <li className="mt-2"><b>Unity Game Engine and C#:</b> I have used Unity for over 6 years.
              In that time, I have released 6 projects online and created over a dozen other prototypes and small projects.
              From that, I have gained a deep understanding of the game engine, C#, and object oriented programming practices.
              See the projects section for information about the released projects </li>
            <li className="mt-2"><b>Godot:</b>Along with making prototypes, I was the lead programmer for Origami Bird Battle with in the Brown-RISD Game Developers.
              I helped program, design, and architect the game and its systems while helping 10 other programmers with varying skill levels learn and use Godot effectively.</li>
            <li className="mt-2"><b>Python:</b> For my data structures and algorithms class, I implemented the page rank algorithm using Python.</li>
            <li className="mt-2"><b>Java: </b>Using Java I have created a Wolfenstein-like rendering engine. I also TA's 2D game engines where I helped program, design, and debug other students game engines.
              In addition, I used Java to create the backend for a course planning website for my software engineering course. </li>
          </ul>
        </div>
      </section>
      <section className="pt-36">

      </section>
      {/* <Analytics mode="production"/> */}
    </div>

  )

}
