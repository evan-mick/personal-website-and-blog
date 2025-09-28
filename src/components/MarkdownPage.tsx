import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { BlogPostMetaData, ProjectLinkHolder } from "@/constants/types";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/CodeBlock";

export const getPostContent = (slug: string) => {
   // const folder = "src/blog_posts";
   // const fileContents = fs.readFileSync(`${folder}/${slug}.md`, "utf-8");
   const folder = path.join(process.cwd(), `public/md`, `${slug}.md`);
   const fileContents = fs.readFileSync(folder, "utf-8");
   const matterResult = matter(fileContents);
   return matterResult;
   // return serialize(fileContents)//matterResult;
   //const markdownPosts = files.filter((file) => file.endsWith(".md"));
};

export const getPostData = (mdFile: string): BlogPostMetaData => {
   const folder = "public/md";

   const fileContents = fs.readFileSync(`${folder}/${mdFile}.md`, "utf-8");
   const matterResult = matter(fileContents);

   return {
      name: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      img: matterResult.data.img,
      url: `${"blog"}/${mdFile}`,
   };
};

// thx https://www.youtube.com/watch?v=Hiabp1GY8fA
export const getPostsData = (mdFiles: string[]): BlogPostMetaData[] => {
   const folder = "public/md";
   //const files = fs.readdirSync(folder);
   const markdownPosts = mdFiles
      //.filter((file) => file.endsWith(".md"))
      .filter((filename) => {
         const fileContents = fs.readFileSync(
            `${folder}/${filename}.md`,
            "utf-8",
         );
         const matterResult = matter(fileContents);
         return matterResult.data.show;
      });

   const posts: BlogPostMetaData[] = markdownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`${folder}/${filename}.md`, "utf-8");
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
};

export const getProjectLinkHoldersFromPostLinks = (
   links: string[],
): ProjectLinkHolder[] =>
   getPostsData(links)
      .map(
         (meta: BlogPostMetaData) => {
            console.log(meta.url);
            return {
               linkTo: meta.url,
               photoLink: meta.img,
               desc: meta.description,
               title: meta.name,
            };
         },
      );

export default function MarkdownPage(
   { pageUrl }: { pageUrl: string },
) {
   const post = getPostContent(pageUrl);
   //const data = getPostData(pageUrl);

   const imagesPreloaded = true; //useImagePreloader([data.img]);

   return (
      <div>
         {post.data.show && imagesPreloaded
            ? (
               <section className="m-5 sm:m-20 md:p-20 md:rounded-md md:shadow-lg h-full block bg-white">
                  <h1 className="font-bold text-3xl md:text-6xl mb-10">
                     {post.data.title}
                  </h1>
                  <Image
                     src={post.data.img}
                     alt="Photo"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{ width: "100%", height: "auto" }}
                  />
                  <br />
                  {/* <article className="prose w-full max-w-none"> */}
                  <ReactMarkdown
                     className="prose md:prose-lg prose-neutral w-full max-w-none"
                     components={{
                        code({ node, className, children, ...props }) {
                           const match = /language-(\w+)/.exec(className || "");
                           return match
                              ? (
                                 <CodeBlock
                                    language={match[1]}
                                    value={String(children).replace(/\n$/, "")}
                                 />
                              )
                              : (
                                 <code className={className} {...props}>
                                    {children}
                                 </code>
                              );
                        },
                     }}
                  >
                     {post.content}
                  </ReactMarkdown>
                  {/* </article>  */}
               </section>
            )
            : <div></div>}
      </div>
   );
}
