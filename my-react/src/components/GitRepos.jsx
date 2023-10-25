import React from 'react';
import { fetchAllReposThunk} from '../redux/repo/repos.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function GitRepos(){
    const userData = useSelector((state) => state?.user.user.userData);
    const reposData = useSelector((state) => state?.repos.allRepos);
    const dispatch = useDispatch();
    const user = userData?.login;
    //console.log("User", user);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             dispatch(fetchAllReposThunk(user));
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     }
    //     
    //     //console.log("ReposState", reposData);
    //     fetchData();
    // }, [dispatch]);


    console.log("RepoState", reposData);

    return (
        <div>
    <h1>Git Repos for {user}</h1>
    
  </div>
    );
} 

export default GitRepos;