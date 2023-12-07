import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedRepoThunk } from "../redux/repo/repos.actions";
import axios from "axios";
import chart from "../css/chart.css";
import HorizontalBarChart from "./HorizontalBarChart";
function GitRepos() {
  const { name } = useParams();
  const { username } = useParams();
  const repoData = useSelector((state) => state?.repos.selectedRepo);
  const dispatch = useDispatch();
  const [timeToFirstComment, setTimetofirstcomment] = useState([]);
  const [timeToFirstMerge, setTimeToFirstMerge] = useState([]);
  const [timeForLast30PullRequests, setTimeForLast30PullRequests] = useState(
    []
  );
  const chartRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      await dispatch(
        fetchSelectedRepoThunk("Call-for-Code", "ClusterDuck-Protocol")
      );
    }
    fetchData();
  }, [name]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/timetofirstcomment/Call-for-Code/ClusterDuck-Protocol`
        )
        .then((res) => {
          setTimetofirstcomment(res.data);
        });
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/calculatetimetomerge/Call-for-Code/ClusterDuck-Protocol`
        )
        .then((res) => {
          setTimeToFirstMerge(res.data);
        });
    }
    fetchData();
  }, []);

  console.log("repo data", repoData);
  console.log("time to first merge", timeToFirstMerge);
  return (
    <div>
      <h1 className="center">Repository Metrics </h1>
      <h1>Repository: {repoData.name}</h1>
      {timeToFirstComment ? (
        <h2>
          Average time to first comment after pull request is made:{" "}
          {timeToFirstComment.formattedTime}
        </h2>
      ) : (
        <h2>Loading time to first comment data...</h2>
      )}
      {timeToFirstMerge.averageMergeTime ? (
        <h2>
          Average time in hours from when pull requests are created to when
          they're merged: {timeToFirstMerge.averageMergeTime.total?.days} days,{" "}
          {timeToFirstMerge.averageMergeTime.total?.hours} hours,{" "}
          {timeToFirstMerge.averageMergeTime.total?.minutes} minutes
        </h2>
      ) : (
        <h2>Loading time to first merge data...</h2>
      )}
      {timeToFirstMerge.averageMergeTime ? (
        <h2>
          Average of last 30 Pull Requests:{" "}
          {timeToFirstMerge.averageMergeTime.latest30PullRequests?.days} days,{" "}
          {timeToFirstMerge.averageMergeTime.latest30PullRequests?.hours} hours,{" "}
          {timeToFirstMerge.averageMergeTime.latest30PullRequests?.minutes} minutes
        </h2>
      ) : (
        <h2>Loading time of last 30 PR...</h2>
      )}

      <div className="chart-container">
        <HorizontalBarChart timeToFirstMerge={timeToFirstMerge} />
      </div>
    </div>
  );
}

export default GitRepos;
