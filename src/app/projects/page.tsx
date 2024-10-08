import ProjectDisplayHolder from "@/components/ProjectDisplayHolder";
import { FinishedGameLinks, FinishedProjectsLinks } from "@/constants/projectData";

export default function Page() {
    return (
      <section className="sm:m-20 p-10 h-full bg-white flex items-center flex-col">
        <section className="m-5 p-10 rounded-md shadow-lg h-full bg-white w-full">

        
        <h4 className="text-5xl text-center md:text-left pb-12 ">Projects</h4>
        {/* <p className="my-5">
          At the top here you can see my finished works. Scroll down a bit more and you'll see some of my unfinished projects. 
        </p>

        <h3 className="text-2xl text-center md:text-left">Finished Projects</h3> */}

        <ProjectDisplayHolder data={FinishedProjectsLinks}/>
        </section>

        <section className="m-5 p-10 rounded-md shadow-lg h-full bg-white w-full">
        <h4 className="text-5xl text-center md:text-left pb-12">Games</h4>
        {/* <p className="my-5">
          At the top here you can see my finished works. Scroll down a bit more and you'll see some of my unfinished projects. 
        </p>

        <h3 className="text-2xl text-center md:text-left">Finished Projects</h3> */}

        <ProjectDisplayHolder data={FinishedGameLinks}/>
        </section>
      </section>
      
    )
  }