import {
    getPostsData,
    getProjectLinkHoldersFromPostLinks,
} from "@/components/MarkdownPage";
import ProjectDisplayHolder from "@/components/ProjectDisplayHolder";
import { BlogPostMetaData, ProjectLinkHolder } from "@/constants/types";

export default function Page() {
    const blogs: ProjectLinkHolder[] = getProjectLinkHoldersFromPostLinks([
        "dsp_explore",
        "quakeclone_ecs",
        "obsidian",
    ]);
    return (
        <section className="sm:m-20 p-10 rounded-md shadow-lg h-full bg-white">
            <h4 className="font-bold text-5xl text-center md:text-left pb-12">
                Blog
            </h4>
            <p >Like any man in tech/gamedev, I have projects, thoughts, opinions, etc. Sometimes *too* many. Here's my place to express them, read if you'd like. </p>
            <br />
            <p className="pb-12">
                Oh and btw these opinions are my own and not that of my employer, etc. Not that I think having a couple technical blogs
                and an odd fasination with a productivity tool could put a multi billion dollar company in hot water.
            </p>
            <ProjectDisplayHolder data={blogs} />
        </section>
    );
}
