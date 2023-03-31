// Header.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { FaTumblr } from "react-icons/fa"

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/">
       
        <a className="bold" data-active={isActive('/')}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
          
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          <a data-active={isActive('/signup')}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #24C73B;
           display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <div className='logo'>
          <FaTumblr className="tumblr" color='white' size={30} style={{marginRight:10}}/>
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>My drafts</a>
        </Link>
        </div>
        
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          
          }

          .left a[data-active='true'] {
            color: gray;
            
          }

          .left {
           
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <div className='rightbuttons'>

         <p className='username'>
          {session.user.name} ({session.user.email})
        </p>
        <img className="avatar" src={session.user.image} />
        <div style={{display:'flex', flexDirection:'row'}}>
          <Link href="/create">
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button className="logout" onClick={() => signOut()}>
          <a>Log out</a>
        </button> 
        </div>
        
        
        </div>
        
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .rightbuttons {
            display:flex;
           flex-direction:column;
            
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          .username {
            color:#22AFFB;
            text-align:center;
            font-size:11px;
          }

          a + a {
            margin-left: 1rem;
          }

          .avatar {
            width:50px;
          }
          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }


          .logout {
            background-color:red;
          }

          button {
            border: none;
            width:78px;
            padding:0px;
            
            height:30px;
            font-size:10px;
            
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2%;
          align-items: center;
          border-bottom:1px solid white;
          width:100%;
          justify-content:space-between;
        }
      `}</style>
    </nav>
  );
};

export default Header;