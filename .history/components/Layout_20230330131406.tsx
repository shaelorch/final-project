import React, { ReactNode } from "react";
import Header from "./Header";
import { FaTumblr } from "react-icons/fa";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <FaTumblr className="tumblr" color='white' size={50} />
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
        
      }

     .tumblr {
      margin-top:20px;
     }

      body {
        
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background:black;
        display:flex;
        justify-content:center;
        color:white;
      }

      input,
      textarea {
        font-size: 16px;
        border-radius:5px;
      }

      button {
        cursor: pointer;
        background-color:#24C73B;
        margin:5px;
        border-radius:5px;
        color:white;
        font-weight:bold;

      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
  </div>
);

export default Layout;
