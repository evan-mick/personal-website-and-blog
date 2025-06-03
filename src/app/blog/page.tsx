import {
    getPostsData,
    getProjectLinkHoldersFromPostLinks,
} from "@/components/MarkdownPage";
import ProjectDisplayHolder from "@/components/ProjectDisplayHolder";
import { BlogPostMetaData, ProjectLinkHolder } from "@/constants/types";

import fs from "fs";
import matter from "gray-matter";

export default function Page() {
    const blogs: ProjectLinkHolder[] = getProjectLinkHoldersFromPostLinks([
        "dsp_explore",
        "quakeclone_ecs",
        "obsidian",
    ]);
    return (
        <section className="sm:m-20 p-10 rounded-md shadow-lg h-full bg-white">
            <h4 className="text-5xl text-center md:text-left pb-12">Blog</h4>
            <p className="pb-12">
                Like any man in tech/gamedev, I have projects, thoughts,
                opinions, etc. Sometimes *too* many. Here's my place to express
                them, read if you'd like.
            </p>
            <ProjectDisplayHolder data={blogs} />
        </section>
    );
}
