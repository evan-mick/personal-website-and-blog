import { BlogPostMetaData } from "@/constants/types";
import fs from "fs";
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import path from 'path'
import CodeBlock from "@/components/CodeBlock";

type Props = {
    serialized: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
    post: {
      data: {
        show: boolean;
        title: string;
        img: string;
      };
    };
  };


  // const getListOfPosts = () => {
  //   const folder = path.join(process.cwd(), 'blog_posts')
  //   const files = fs.readdirSync(folder)
  //   return files.filter(file => file.endsWith('.md'))
  // }
  
//   export const generateStaticParams = async () => {
//     const posts = getListOfPosts()
//     return posts.map(post => { slug: post.slug })
//   }

  
const getPostContent = (slug: string) => {
    console.log(slug);
    const folder = "src/blog_posts";
    const fileContents = fs.readFileSync(`${folder}/${slug}.md`, "utf-8");
    const matterResult = matter(fileContents);
    return matterResult;
    // return serialize(fileContents)//matterResult;
    //const markdownPosts = files.filter((file) => file.endsWith(".md"));
}

async function getData(postFrom: string) {
    // Fetch or generate your post content here
    const post = getPostContent(postFrom);
    console.log("ONE");
    const serialized = await serialize(post.content);
  
    console.log("TWO");
    return {
      props: {
        serialized,
        post,
      },
    };
  }


export default async function Page({ params }: { params: { post: string } }) {
    const props = (await getData(params.post));
    const post = props.props.post;
    const serialized = props.props.serialized;
    console.log("THREE");
    // console.log(props)

    return (<div>
        {post.data.show ? 
        <section className="m-20 p-10 rounded-md shadow-lg h-full block">
            <h1 className="text-6xl mb-10">{post.data.title}</h1>
             <Image 
                        src={post.data.img}
                        alt="Photo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    /> 
            {/* <article className="prose w-full max-w-none"> */}
                <ReactMarkdown className="prose-lg prose-neutral w-full max-w-none"
                components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <CodeBlock
                language={match[1]}
                value={String(children).replace(/\n$/, '')}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
                    {props.props.post.content}
                </ReactMarkdown>
            {/* </article>  */}
            
        </section> 
        
        : <div></div>}
    </div>)
}
