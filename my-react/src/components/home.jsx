import React from "react";
import home from "../css/home.css";
import GitHubOAuthLogin from "./GitHubOAuthLogin";
//import styles from "../assets/hostit-html/css/style.scss"
import styles from "../css/login.css";
function Home() {
  return (
    <div className="parent-container" >
      <div className="container">
        <h1 >GitHub Repository Analyzer</h1>
        <GitHubOAuthLogin />
      </div>
    </div>
  );
}

export default Home;
