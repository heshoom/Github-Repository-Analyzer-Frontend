import React from "react";
import GitHubUserInfo from "./GitHubUserInfo";

function GitHubOAuthLogin() {
  

    const handleLogin = () => {
    window.location.href = process.env.REACT_APP_API_URL;
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      ></link>
      <div className="center">
        <button class="btn btn-danger" onClick={() => handleLogin()}>
          Login with GitHub
        </button>
      </div>
    </div>
  );
}

export default GitHubOAuthLogin;
