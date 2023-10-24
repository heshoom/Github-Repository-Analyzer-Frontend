import React from "react";
import fetchUserThunk from "../redux/user/user.actions";
import { fetchAllReposThunk } from "../redux/repo/repos.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GitRepos from "./GitRepos";

function GitHubUserInfo() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user.user.userData);
  const user = userData?.login;

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchUserThunk());
        //dispatch(fetchAllReposThunk(user));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    console.log("UserState", userData);
    //console.log("ReposState", reposData);
    fetchData();
  }, [dispatch]);



  return (
    <div>
      <div className="center">
        <h1>GitHub Repository Analyzer</h1>
        <h2>Logged in as: {user} </h2>
      </div>
        <div className="center">
            <GitRepos />
        </div>
    </div>
  );
}

export default GitHubUserInfo;
