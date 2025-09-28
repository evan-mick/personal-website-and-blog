import MarkdownPage from "@/components/MarkdownPage";
/*type Props = {
  serialized: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  post: {
    data: {
      show: boolean;
      title: string;
      img: string;
    };
  };
};*/

// const getListOfPosts = () => {
//   const folder = path.join(process.cwd(), 'blog_posts')
//   const files = fs.readdirSync(folder)
//   return files.filter(file => file.endsWith('.md'))
// }

//   export const generateStaticParams = async () => {
//     const posts = getListOfPosts()
//     return posts.map(post => { slug: post.slug })
//   }

//async function getData(postFrom: string) {
//  // Fetch or generate your post content here
//  const post = getPostContent(postFrom);
//  const serialized = await serialize(post.content);
//
//  return {
//    props: {
//      serialized,
//      post,
//    },
//  };
//}

export default async function Page({ params }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  return <MarkdownPage pageUrl={post} />;
}
