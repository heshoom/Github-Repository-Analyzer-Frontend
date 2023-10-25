// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {
  const url = useLocation();
  
  return (
    <nav className='nav'>
      <div className="center">
          {url.pathname != "/" ? <Link to="/">Home</Link> : null}
          {/* {url.pathname != "/userInfo" ? <Link to="/">Home</Link> : null} */}
          <Link to="/repos">Repos</Link>
          <Link to="">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
