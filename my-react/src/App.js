import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GitHubUserInfo from "./components/GitHubUserInfo";
import Layout from "./components/Layout";

function App() {

//   const handleLogin = () => {
//     dispatch(setLoggedIn());
//   };

// const handleLogout = () => {
//   dispatch(setLoggedOut());
// };
  return (
   <Router> 
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/UserInfo" element={<GitHubUserInfo/>}/>
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
