import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedRepoThunk } from "../redux/repo/repos.actions";
import axios from "axios";

function GitRepos() {
  const { name } = useParams();
  const { username } = useParams();
  const repoData = useSelector((state) => state?.repos.selectedRepo);
  const dispatch = useDispatch();
  const [timeToFirstComment, setTimetofirstcomment] = useState([]);

useEffect(() => {
  async function fetchData(){
    await dispatch(fetchSelectedRepoThunk(username, name));
  }
  fetchData();
},[name]);

useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/api/timetofirstcomment/Call-for-Code/ClusterDuck-Protocol`).then((res) => {
    setTimetofirstcomment(res.data);
  });
}, []);
console.log("repo data", repoData);

  return (
    <div>
      <h1 className="center">Repository Metrics </h1>
      <h1>Repository: {repoData.name}</h1>
      <h2>Average time to first comment after pull request is made: {timeToFirstComment.formattedTime}</h2>
    </div>
  );
}

export default GitRepos;
