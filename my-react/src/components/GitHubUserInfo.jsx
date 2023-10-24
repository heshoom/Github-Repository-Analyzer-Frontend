import React from "react";
import fetchUserThunk from "../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function GitHubUserInfo() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user.user.userData); // Assuming 'userData' is the slice of state where the data is stored.

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchUserThunk());
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    console.log("State" ,userData);
    fetchData();
  }, [dispatch]);

  

  return (
    <div>
      <div className="center">
        <h1>GitHub Repository Analyzer</h1>
        <h2>Logged in as: {userData?.login} </h2>
      </div>
    </div>
  );
}

export default GitHubUserInfo;
