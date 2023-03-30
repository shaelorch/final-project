import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from '../lib/prisma';
import { AiFillClockCircle } from "react-icons/ai"
import { FaTumblr } from "react-icons/fa";



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
  
  <><FaTumblr className="tumblr" color='white' size={50} /><Layout>
      <div className="page">
        <div className="feed">
          <h1 style={{ color: 'white' }}>Public Feed</h1>
          <AiFillClockCircle size={35} />
        </div>

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
        }
        .feed{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .tumblr {
          left:-100px;
        }
      `}</style>
    </Layout></>
  )
}

export default Blog
