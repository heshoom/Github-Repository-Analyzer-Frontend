import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GitHubUserInfo from "./components/GitHubUserInfo";
import GitRepo from "./components/GitRepo";
import Navbar from "./components/NavBar";
function App() {

//   const handleLogin = () => {
//     dispatch(setLoggedIn());
//   };

// const handleLogout = () => {
//   dispatch(setLoggedOut());
// };
  return (
   <Router> 
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/UserInfo" element={<GitHubUserInfo/>}/>
        <Route path="/:username/:name" element={<GitRepo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
