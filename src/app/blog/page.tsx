import ProjectDisplayHolder from "@/components/ProjectDisplayHolder";
import { AvailableBlogs } from "@/constants/blogPostData";



export default function Page() {
    return (
        <section className="sm:m-20 p-10 rounded-md shadow-lg h-full">
            <h4 className="text-5xl text-center md:text-left pb-12">Blog</h4>
            <p className="pb-12">Like any man in tech/gamedev, I have thoughts and opinions. Sometimes too many. Here's my place to express them, read if you'd like. </p>

            <ProjectDisplayHolder data={AvailableBlogs}/>
        </section>
    )
}