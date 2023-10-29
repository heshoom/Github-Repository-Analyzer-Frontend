import React from "react";
import { useParams } from "react-router-dom";

function GitRepos() {
  const { repoid } = useParams();
  console.log("id :", repoid);
  return (
    <div>
      <h1 className="center">Repository Metrics </h1>
    </div>
  );
}

export default GitRepos;
