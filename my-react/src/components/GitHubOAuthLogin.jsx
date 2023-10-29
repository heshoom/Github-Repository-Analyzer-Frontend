import React from "react";
import GitHubUserInfo from "./GitHubUserInfo";
import githubMarkWhite from "../assets/github-mark/github-mark-white.png";

function GitHubOAuthLogin() {
  const handleLogin = () => {
    window.location.href = process.env.REACT_APP_API_URL;
  };

  return (
    <div>
      <div>
        <button onClick={handleLogin} className="github-button">
          <img
            src={githubMarkWhite}
            alt="GitHub Logo"
            style={{ width: "30px", height: "30px" }}
          />{" "}
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

export default GitHubOAuthLogin;
