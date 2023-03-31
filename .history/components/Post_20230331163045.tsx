import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

// export type UserProps = {
//   image: string;

// }

const Post: React.FC<{ post: PostProps, user: UserProps }> = ({ post, user }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const userImg = user.image;
  return (
    <div  onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      {/* <Image src={userImg} width={50} height={50}/> */}
      <h2 >{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }

        small {
          color: grey;
        }
        
      `}</style>
    </div>
  );
};

export default Post;
