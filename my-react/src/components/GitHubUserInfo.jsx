import React from "react";
import fetchUserThunk from "../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GitRepos from "./GitRepos";
import { fetchAllReposThunk } from "../redux/repo/repos.actions";
import { debounce } from "lodash";

function GitHubUserInfo() {
  const dispatch = useDispatch();
  //const state = useSelector((state) => state);
  const userData = useSelector((state) => state?.user.user.userData);
  const user = userData?.login;
  const reposData = useSelector((state) => state?.repos.allRepos);
  //const repos = reposData?.map((repo) => repo.name);
  //const debouncedFetchRepos = debounce(dispatch(fetchAllReposThunk), 500); // Adjust the debounce delay as needed
  //const debouncedFetchUser = debounce(dispatch(fetchUserThunk), 500); // Adjust the debounce delay as needed

  //console.log("username: " , state);

  const fetchAllRepos = (user)  => {
    return dispatch(fetchAllReposThunk(user));
  };

  const fetchUser = () => {
    return dispatch(fetchUserThunk());
  };

  useEffect(() => {
    try {
      fetchUser();
      fetchAllRepos(user)
    } catch (error) {
      console.error("Error fetching repo data: ", error);
    }
    
  }, []);
  
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       //dispatch(fetchUserThunk());
  //       //dispatch(fetchAllReposThunk(user));
  //       debouncedFetchUser();
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   }
  //   console.log("UserState", userData);
  //   //console.log("ReposState", reposData);
  //   fetchData();
  // }, [dispatch]);

  return (
    <div>
      <div className="center">
        <h1>GitHub Repository Analyzer</h1>
        <h2>Logged in as: {user} </h2>
      </div>
      <div>
        {reposData?.map((repo) => (
          <div key={repo.id} className="center">
            <h2>{repo.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitHubUserInfo;
