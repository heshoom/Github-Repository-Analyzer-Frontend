import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GitHubUserInfo from "./components/GitHubUserInfo";

function App() {
  return (
   <Router> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/UserInfo" element={<GitHubUserInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
