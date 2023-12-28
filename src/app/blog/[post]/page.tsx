import { BlogPostMetaData } from "@/constants/types";
import fs from "fs";
import matter from "gray-matter"
import Markdown from "markdown-to-jsx"


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
        <section className="m-20 p-10 rounded-md shadow-lg h-full">
        <h1 className="text-6xl mb-10">{post.data.title}</h1>
        <Markdown>{post.content}</Markdown> 
        </section>
    </div>)
}