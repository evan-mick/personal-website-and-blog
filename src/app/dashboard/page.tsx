import ProjectDisplay from "@/components/ProjectDisplay";
import { TetronProjLink } from "@/constants/projectData";
import photo from "public/header.jpg";






export default function Page() {
  return (
    <div className="w-screen h-screen flex-col justify-center align-middle">
      <section>
        <h1 className="text-4xl md:text-8xl m-10">
          I am <br/> <b>Evan Samuel Mickelson</b>
        </h1>
      </section>
      <section className="w-full">
        <p className="m-10">
          I am a Computer Science and Economics student at Brown University well versed in software engineering and product management. 
          I am also a passionate game developer and musician. 
          The website you are seeing was coded from scratch using Next JS with Tailwind CSS. 
        </p>
        <p>

        </p>

      </section>

      <section id="featured-projects" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Featured Projects</h4>
        </div>
        <div className="flex flex-wrap gap-16 p-12 justify-center">
          <ProjectDisplay linkTo={TetronProjLink.linkTo} photoLink={TetronProjLink.photoLink} desc={TetronProjLink.desc}/>
          <ProjectDisplay linkTo='/projects' photoLink={photo} desc={"Testing"}/>
          <ProjectDisplay linkTo='/projects' photoLink={photo} desc={"Testing"}/>
        </div>
      </section>
      <section id="skills overview" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Technical Skills Overview</h4>
        </div>
        <div className="mx-20 mt-4">
          <p>I have been programming and creating games since before high school, 
            and thus have a deep understanding of applied programming practices as well as experience with a wide range of languages. 
            Here are some languages and tools I am familiar with, and where I had to make use of them. 
          </p>
          <ul>

            <li><b>Unity Game Engine and C#:</b>I have used Unity for over 6 years. 
            In that time, I have released 6 projects online and created over a dozen other prototypes and small projects. 
            From that, I have gained a deep understanding of the game engine, C#, and object oriented programming practices. 
            See the projects section for information about the released projects </li>
            <li><b>Java: </b>Using Java I have created a Wolfenstein-like rendering engine. I also TA's 2D game engines where I helped program, design, and debug other students game engines. 
            In addition, I used Java to create the backend for a course planning website for my software engineering course. </li>
            <li><b>React, Typescript, CSS:</b> Along with using Next for this website, I am currently using React Native for a social media mobile app. 
            I have also made use of React for school projects in my school's software engineering course and the frontend for a WIP project for my Brown's entrepreneurship club.</li>
            <li><b>C (and a subset of C++)</b>: For my computer systems course, I created Snake with custom levels, 
            security and page table features for WeenseyOS (a unix-like OS project), 
            and the logic for a key value store all using C (and/or with classes from C++ with some stuff from the standard library) </li>
            <li><b>Unreal Game Engine, Blueprints, C++</b>: During my time at 2K games, I used Unreal Game Engine to explore the onboarding process for their internal game's backend services.
            I have also used the engine to help create US(FPS), a packaged themed first person shooter, in Brown RISD Game Developers. 
            I also made a prototype map for the VR game Pavlov, as well as a VR fireplace simulator for the Brown 2023 hackathon.</li>
          </ul>
        </div>
      </section>
    </div>
    
  )
}