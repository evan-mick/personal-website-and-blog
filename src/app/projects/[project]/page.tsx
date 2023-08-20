
'use client'


import { NameToProject } from "@/constants/projectData"
import { Project } from "@/constants/Project";
import Image from "next/image";



export default function Page({ params }: { params: { project: string } }) {

    const info: Project = NameToProject[params.project];

    if (!info) {
        return <div>error</div>
    }

    return (

    <section className="m-20 p-10 rounded-md shadow-lg h-full">
        <div className="flex flex-wrap justify-evenly h-full">
            
            <div className="flex items-center justify-center">
                <h1 className="text-4xl md:text-8xl mb-10 text-center">
                    {info.name}
                </h1>
            </div>
                
            
            <div className="object-scale-down max-w-4xl">
                    {/* TODO: make this a crossfade or carousel of many images instead of one */}
                    {/* {info.images?.map((img,i) => (
                        <Image key={i} src={img} alt={"image"}/>
                    ))} */}

                    {info.images && <Image  src={info.images[0]} alt="image of project"/>}



            </div>
        </div>
        <div className="flex content-center justify-center align-middle mt-5">
            
            {info.tools && <h2 className="flex text-lg md:text-2xl text-center whitespace-pre-wrap ">
                <b>Tools Used: </b> {info.tools}
            </h2>}
        </div>
        <div className="flex content-center justify-center align-middle mt-2">
            {info.link && <h2 className="flex text-lg md:text-2xl text-center whitespace-pre-wrap ">
                <a className="underline text-blue-400" href={info.link}>Link to {info.name}</a>
            </h2>}
            
        </div>
        
        <div className="justify-center">
            <p className="mt-4 md:mx-12 text-center md:text-xl">
                {info.description}
            </p>
        </div>
    </section>



    )
}