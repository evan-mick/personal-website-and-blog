import { BlogPostMetaData } from "@/constants/types";
import fs from "fs";
import matter from "gray-matter"
import { HTMLAttributes, ReactNode } from "react";
import ReactMarkdown from 'react-markdown'


const getPostContent = (url: string) => {
    console.log(url);
    const folder = "src/blog_posts";
    const fileContents = fs.readFileSync(`${folder}/${url}.md`, "utf-8");
    const matterResult = matter(fileContents);
    return matterResult;
    //const markdownPosts = files.filter((file) => file.endsWith(".md"));
}


export default function Page({ params }: { params: {post: string} }) {
    
    const post = getPostContent(params.post);
    return (<div>
        {post.data.show ? 
        <section className="m-20 p-10 rounded-md shadow-lg h-full block">
            <h1 className="text-6xl mb-10">{post.data.title}</h1>
            <img className="w-full object-scale-down md:object-cover"
                        src={post.data.img}
                        alt="Photo"
                        width={100}
                    />
            <ReactMarkdown>{post.content}</ReactMarkdown> 
        </section> 
        : <div></div>}
    </div>)
}
