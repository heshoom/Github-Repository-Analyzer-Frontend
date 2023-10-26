import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.actions";
import { fetchAllReposThunk } from "../redux/repo/repos.actions";
import GitRepos from "./GitRepos";
import { debounce } from "lodash";

function GitHubUserInfo() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user.user.userData);
  const reposData = useSelector((state) => state?.repos.allRepos);
  const user = userData?.login;

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user data
        await dispatch(fetchUserThunk());
        // Fetch all repositories
        await dispatch(fetchAllReposThunk(user));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    // Call fetchData when the component mounts or when reposData changes
    fetchData();
  }, [user]); // Listen for changes in the 'user' variable

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
