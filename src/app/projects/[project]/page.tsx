'use client'

import { NameToProject, Project } from "@/constants/projects"
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';


export default function Page({ params }: { params: { project: string } }) {

    const info: Project = NameToProject[params.project];

    console.log("hello");
    console.log(NameToProject)
    console.log(info);

    if (!info) {
        return <div>error</div>
    }

    return (
    <div>
        <div className="flex justify-center">
            <div className="">
                <h1 className="text-9xl">
                    {info.name}
                </h1>
                <div>
                    {info.tools?.map((tool,i) => (
                        <div key={i}>
                            <h2 className="text-4xl">
                            {tool}
                            </h2>
                            

                        </div>
                        
                    ))}
                </div>
                
            </div>


            <Carousel fade interval={2000} controls={false}> 
                    {info.images?.map(img => (
                    <Carousel.Item key={img.src}>
                        <Image src={img} alt={"image"}></Image>
                        
                    </Carousel.Item>

                    ))}

            </Carousel>
        </div>
        
        

        <p>
            {info.description}
        </p>



    </div>)
}