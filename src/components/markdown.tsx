import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { BlogPostMetaData } from "@/constants/types";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/CodeBlock";

export const getPostContent = (slug: string) => {
   console.log(slug);
   // const folder = "src/blog_posts";
   // const fileContents = fs.readFileSync(`${folder}/${slug}.md`, "utf-8");
   const folder = path.join(process.cwd(), `public/blog_posts`, `${slug}.md`);
   const fileContents = fs.readFileSync(folder, "utf-8");
   const matterResult = matter(fileContents);
   return matterResult;
   // return serialize(fileContents)//matterResult;
   //const markdownPosts = files.filter((file) => file.endsWith(".md"));
};

export default async function MarkdownPage(
   { params }: { params: { post: string } },
) {
   const post = getPostContent(params.post);

   return (
      <div>
         {post.data.show
            ? (
               <section className="m-5 sm:m-20 md:p-20 md:rounded-md md:shadow-lg h-full block bg-white">
                  <h1 className="text-3xl md:text-6xl mb-10">
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
