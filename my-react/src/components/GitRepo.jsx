import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedRepoThunk } from "../redux/repo/repos.actions";

function GitRepos() {
  const { name } = useParams();
  const { username } = useParams();
  const repoData = useSelector((state) => state?.repos.selectedRepo);
  const dispatch = useDispatch();

useEffect(() => {
  async function fetchData(){
    await dispatch(fetchSelectedRepoThunk(username, name));
  }
  fetchData();
},[name]);

console.log("Selected repo data: ", repoData);
  return (
    <div>
      <h1 className="center">Repositsory Metrics </h1>
    </div>
  );
}

export default GitRepos;
