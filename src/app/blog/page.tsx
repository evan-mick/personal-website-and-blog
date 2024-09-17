import ProjectDisplayHolder from "@/components/ProjectDisplayHolder";
import { BlogPostMetaData, ProjectLinkHolder } from "@/constants/types";

import blogtest from "public/games/Skippy/screenshot1.png"


import fs from "fs";
import matter from "gray-matter"

// thx https://www.youtube.com/watch?v=Hiabp1GY8fA
const getPostsData = (): BlogPostMetaData[] => {

    const folder = "src/blog_posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files
                            .filter((file) => file.endsWith(".md"))
                            .filter((filename) => {
                                const fileContents = fs.readFileSync(`${folder}/${filename}`, "utf-8");
                                const matterResult = matter(fileContents);
                                return matterResult.data.show; 
                            });

    const posts: BlogPostMetaData[] = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}/${filename}`, "utf-8");
        const matterResult = matter(fileContents);

        return {
            name: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date,
            img: matterResult.data.img,
            url: `${"blog"}/${filename.replace(".md", "")}`,
        };
    });

    
    return posts; 
}


export default function Page() {

    const blogs: ProjectLinkHolder[] = getPostsData().map((meta) => {
        console.log(meta.url);
        return {
            linkTo: meta.url,
            photoLink: meta.img,
            desc: meta.description,
            title: meta.name,
            
        }
    });

    return (
        <section className="sm:m-20 p-10 rounded-md shadow-lg h-full bg-white">
            <h4 className="text-5xl text-center md:text-left pb-12">Blog</h4>
            <p className="pb-12">Like any man in tech/gamedev, I have projects, thoughts, opinions, etc. Sometimes *too* many. Here's my place to express them, read if you'd like. </p>
            <ProjectDisplayHolder data={blogs}/>
        </section>
    )
}