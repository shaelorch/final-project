import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from '../lib/prisma';
import { AiFillClockCircle } from "react-icons/ai"
import { FaTumblr } from "react-icons/fa";
import Avatar from "../components/Avatar";
import { useSession } from "next-auth/react";


export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  
  return (
  
  <><Layout>
      <div className="page">
        <div className="feed">
          <h1 style={{ color: 'white' }}>Public Feed</h1>
          <AiFillClockCircle size={35} style={{marginLeft:20}}/>
        </div>
        <Avatar/>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: #1E1E1E;
          transition: box-shadow 0.1s ease-in;
          border-radius:5px;
          color:white;
          width:100%;
          
        }
        .feed{
          display:flex;
          align-items:center;
          margin-bottom:10px;
          justify-content:center;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }

      

        
      `}</style>
    </Layout></>
  )
}

export default Blog
