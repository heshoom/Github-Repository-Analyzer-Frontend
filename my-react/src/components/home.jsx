import React from "react";
import home from "../css/home.css";
import GitHubOAuthLogin from "./GitHubOAuthLogin";
function Home() {
  return (
    <div>
      <div className="center">
      <h1>GitHub Repository Analyzer</h1>
      <GitHubOAuthLogin/>
      </div>
    </div>
  );
}


export default Home;