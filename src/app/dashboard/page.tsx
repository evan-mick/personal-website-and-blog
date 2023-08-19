import ProjectDisplay from "@/components/ProjectDisplay";
import photo from "public/header.jpg";

export default function Page() {
  return (
    <div className="w-screen h-screen flex-col justify-center align-middle">
      <section>
      <h1 className="text-9xl">
        I am <br/> <b>Evan Samuel Mickelson</b>
      </h1>
      </section>
      <section>
        <p>
          I am a Computer Science and Economics student at Brown University experienced software engineering and product management. 
          I am also a passionate game developer and musician. 
          The website you see was coded from scratch with Next JS with Tailwind CSS. 
        </p>
        <p>

        </p>

      </section>

      <section>
        <h1>Featured Projects</h1>
        <ProjectDisplay linkTo='/projects' photoLink={photo} desc={"Testing"}/>
      </section>
    </div>
    
  )
}