import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.actions";
import { fetchAllReposThunk } from "../redux/repo/repos.actions";

function GitHubUserInfo() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user.user.userData);
  const reposData = useSelector((state) => state?.repos.allRepos);
  const user = userData?.login;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

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

    // Call fetchData when the component mounts or when 'user' changes
    fetchData();
  }, [user]); // Listen for changes in the 'user' variable

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reposData?.slice(indexOfFirstItem, indexOfLastItem);

  const navigateTo = (name) => {
    navigate(`/${user}/${name}`);
  };

  return (
    <div>
      <div className="center">
        <h1>GitHub Repository Analyzer</h1>
        <h2>Logged in as: {user} </h2>
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= reposData.length}
        >
          Next
        </button>
      </div>
      <div>
        {currentItems?.map((repo) => (
          <div key={repo.id} className="center">
            <h1>
              <button onClick={() => navigateTo(repo.name)}>{repo.name}</button>
            </h1>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= reposData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GitHubUserInfo;
