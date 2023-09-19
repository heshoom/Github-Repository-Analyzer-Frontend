import React from "react";

function GitHubOAuthLogin() {
  
    const handleLogin = () => {
    window.location.href = "http://localhost:2400/";
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
