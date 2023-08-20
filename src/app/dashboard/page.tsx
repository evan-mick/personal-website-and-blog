import ProjectDisplay from "@/components/ProjectDisplay";
import { AtlasSwingsProjLink, TetronProjLink } from "@/constants/projectData";
import photo from "public/header.jpg";






export default function Page() {
  return (
    <div className="w-screen h-screen flex-col justify-center align-middle font-mono">
      <section>
        <h1 className="text-4xl md:text-8xl m-10 md:mx-48 xl:mx-96">
          I am <br/> <b>Evan Samuel Mickelson</b>
        </h1>
      </section>
      <section className="w-full">
        <div className="whitespace-pre-wrap m-10 md:mx-48 xl:mx-96">
          <p>
            I am a Computer Science and Economics student at Brown University well versed in software engineering and product management. 
            I am also a passionate game developer and musician. 
            
          </p>
          <br/>
          <p>
            Since June, I have been employeed at 2K Games as a "Software Engineering, Product Management Intern" (a bit of a mouthful, I know haha). 
            There, I have helped analyze the onboarding experience and costs of their backend services used accross 2K's titles 
            by incorporating their services in my own Unreal projects, talking to customers, and undergoing market research. 
          </p>
          <br/>
          <p>
            At Brown University, I am apart of the executive board for Brown RISD Game Developers. 
            During my time, I have contributed to the development of 5 video games, 
            helped managed our yearly average of roughly 100 students, and taught other students how to effectively use Unity and Unreal.
          </p>
          <br/>
          <p>
            The website you are seeing was coded from scratch by me using Next JS with Tailwind CSS. 
          </p>
        </div>
      </section>

      <section id="featured-projects" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Featured Projects</h4>
        </div>
        <div className="flex flex-wrap gap-16 p-12 justify-center">
          <ProjectDisplay linkTo={AtlasSwingsProjLink.linkTo} photoLink={AtlasSwingsProjLink.photoLink} desc={AtlasSwingsProjLink.desc}/>
          <ProjectDisplay linkTo={TetronProjLink.linkTo} photoLink={TetronProjLink.photoLink} desc={TetronProjLink.desc}/>
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
            <li className="mt-2"><b>Unity Game Engine and C#:</b> I have used Unity for over 6 years. 
            In that time, I have released 6 projects online and created over a dozen other prototypes and small projects. 
            From that, I have gained a deep understanding of the game engine, C#, and object oriented programming practices. 
            See the projects section for information about the released projects </li>
            <li className="mt-2"><b>Java: </b>Using Java I have created a Wolfenstein-like rendering engine. I also TA's 2D game engines where I helped program, design, and debug other students game engines. 
            In addition, I used Java to create the backend for a course planning website for my software engineering course. </li>
            <li className="mt-2"><b>React, Typescript, CSS:</b> Along with using Next for this website, I am currently using React Native for a social media mobile app. 
            I have also made use of React for school projects in my school's software engineering course and the frontend for a WIP project for Brown's Entrepreneurship Club.</li>
            <li className="mt-2"><b>C (and a subset of C++)</b>: For my computer systems course, I created Snake with custom levels, 
            security and page table features for WeenseyOS (a unix-like OS project), 
            and the logic for a key value store all using C (and/or minimal features of C++, like classes and some data structures from the standard library) </li>
            <li className="mt-2"><b>Unreal Game Engine, Blueprints, C++</b>: During my time at 2K games, I used Unreal Game Engine to explore the onboarding process for their internal games backend services. 
            In the summer of 2022, I taught the engine to 30 teenagers at my time camp counselling at iDTech. 
            I have also used the engine to help create US(FPS), a packaged themed first person shooter, in Brown RISD Game Developers. 
            Lastly, I made a prototype map for the VR game Pavlov, as well as a VR fireplace simulator for the Brown 2023 hackathon.</li>
            <li className="mt-2"><b>Python</b>: For my data structures and algorithms class, I implemented the page table algorithm using Python.</li>
          </ul>
        </div>
      </section>
      <section className="pt-36">

      </section>
    </div>
    
  )
}