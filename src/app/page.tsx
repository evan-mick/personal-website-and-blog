import { getProjectLinkHoldersFromPostLinks } from "@/components/MarkdownPage";
import ProjectDisplay from "@/components/ProjectDisplay";
import { ProjectLinkHolder } from "@/constants/types";

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
            I am a new grad Computer Science and Economics major from Brown
            University, and I am well-versed in software engineering and product
            management. I am also a passionate game developer and musician. This
            website exists as a place for employers to see my experiences and
            for me to show off my software, music, and thoughts in a centralized
            place.
          </p>
          <br />
          <p>
            As a participant in Capitalism, I seek gainful employment. My latest
            attempt was from May to August of 2024. I am happy to say that,
            thanks to the purchasing of V-bucks from the credit cards of
            millions of parents worldwide, I was employed at Epic Games as a
            "Gameplay Programming Intern," where I worked on Fortnite Festival
            using Unreal Engine and C++ on the Harmonix team.
          </p>
          <br />
          <p>
            From June to November of 2023, I worked at 2K Games as a "Software
            Engineering, Product Management Intern" (a bit of a mouthful, I
            know). There, I helped analyze the onboarding experience and costs
            of their backend services used across 2K's titles by incorporating
            them in my own Unreal projects, talking to customers, and undergoing
            market research.
          </p>
          <br />
          <p>
            At Brown University, I am part of the executive board for Brown RISD
            Game Developers. During my time there, I have contributed to the
            development of five video games, helped manage our yearly average of
            roughly 100 students, and taught other students how to use Unity and
            Unreal effectively. I have also been a TA for two computer science
            courses, Computer Graphics, and 2D Game engines.
          </p>
          <br />
          <p>
            The website you are seeing was made by *yours truly* using Next JS
            with Tailwind CSS. You can find the code for it{" "}
            <a
              className="underline text-blue-400"
              href="https://github.com/evan-mick/personal-website-and-blog"
            >
              Here
            </a>
          </p>
        </div>
      </section>

      <section id="featured-projects" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Featured Projects</h4>
        </div>
        <div className="flex flex-wrap gap-16 p-12 justify-center">
          {getProjectLinkHoldersFromPostLinks(["headliner", "shaderengine"])
            .map((
              proj: ProjectLinkHolder,
            ) => (
              <ProjectDisplay
                key={proj.title}
                title={proj.title}
                linkTo={proj.linkTo}
                photoLink={proj.photoLink}
                desc={proj.desc}
              />
            ))}
          {
            /* <ProjectDisplay linkTo={HeadlinerProjLink.linkTo} photoLink={HeadlinerProjLink.photoLink} desc={HeadlinerProjLink.desc} />
          <ProjectDisplay linkTo={ShaderEngineProjLink.linkTo} photoLink={ShaderEngineProjLink.photoLink} desc={ShaderEngineProjLink.desc} /> */
          }
        </div>
      </section>
      <section id="skills overview" className="w-full">
        <div className="w-screen align-center">
          <h4 className="text-4xl text-center">Technical Skills Overview</h4>
        </div>
        <div className="mx-10 md:mx-48 xl:mx-96 mt-4">
          <p>
            I have been programming and creating games since before high school,
            and thus have a deep understanding of applied programming practices
            and experience with a wide range of languages. Here are some
            languages and tools I am familiar with, and where I made use of
            them.
          </p>
          <ul>
            <li className="mt-2">
              <b>Unreal Game Engine</b>:
              <ul className="list-disc list-inside">
                <li>
                  Worked on Fortnite Festival at Epic Games (Fortnite's Guitar
                  Hero gamemode). Extensively used C++, Blueprints, and many of
                  Unreal's other features to create cheats, fix bugs, and to
                  improve the developer and user experience
                </li>
                <li>
                  At 2K games, used the engine to explore the onboarding process
                  for their internal games backend services.
                </li>
                <li>
                  Taught the engine to 30 teenagers while camp counselling at
                  iDTech summer of 2022.
                </li>
                <li>
                  Developed small game projects with it, including US(F)PS (an
                  package themed FPS), a VR map for the game Pavlov, and a VR
                  campfire simulator game.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>Go:</b>

              <ul className="list-disc list-inside">
                <li>
                  Implemented the RAFT distributed dictionary protocol for a
                  distributed systems course.
                </li>{" "}
                <li>
                  Using Go for the backend of a news headline and summarizing
                  website "The Headliner." Handling web scraping, server-side
                  rendering, API handling, and database access.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>React, TypeScript, CSS:</b>

              <ul className="list-disc list-inside">
                <li>
                  Used React and TypeScript along with Next.js for this website.
                </li>{" "}
                <li>
                  Used React for school projects in a software engineering
                  course.
                </li>{" "}
                <li>
                  Built the frontend for a project in Brown's Entrepreneurship
                  Club using React.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>C++:</b>

              <ul className="list-disc list-inside">
                <li>
                  In Computer Graphics, built a real-time renderer (using
                  OpenGL), a software raytracer, and a paint application.
                </li>{" "}
                <li>
                  In Computer Networks, implemented IP and TCP protocols with
                  virtual router and host nodes.
                </li>{" "}
                <li>
                  For a joint final project between the two classes, created a
                  multiplayer Quake clone with a custom ECS and game
                  client-server architecture. Worked with 2 others on physics,
                  rendering, gameplay, and networking systems.
                </li>{" "}
                <li>
                  In a Computer Systems course, built Snake with custom levels,
                  added page table features and security to WeenseyOS (a
                  Unix-like OS project), and implemented a key-value store all
                  in C++ ("C with classes" style).
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>Unity Game Engine and C#:</b>

              <ul className="list-disc list-inside">
                <li>
                  Used Unity for over 6 years, releasing 6 projects online and
                  building over a dozen prototypes and smaller projects.
                </li>{" "}
                <li>
                  Gained deep understanding of Unity, C#, and object-oriented
                  programming practices.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>Godot:</b>

              <ul className="list-disc list-inside">
                <li>
                  Lead programmer for Origami Bird Battle with Brown-RISD Game
                  Developers.
                </li>{" "}
                <li>
                  Programmed, designed, and architected the game and its
                  systems, while mentoring 10 other programmers of varying skill
                  levels in Godot.
                </li>{" "}
                <li>Built additional prototypes using the engine.</li>
              </ul>
            </li>
            <li className="mt-2">
              <b>Python:</b>

              <ul className="list-disc list-inside">
                <li>
                  Implemented the PageRank algorithm for a data structures and
                  algorithms course.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>Java:</b>

              <ul className="list-disc list-inside">
                <li>Built a Wolfenstein-like rendering engine.</li>{" "}
                <li>
                  TA’d for a 2D game engines course, assisting with programming,
                  design, and debugging.
                </li>{" "}
                <li>
                  Created the backend for a course planning website as part of a
                  software engineering course.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-36">
      </section>
      {/* <Analytics mode="production"/> */}
    </div>
  );
}
