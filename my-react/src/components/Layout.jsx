// Layout.js
import React from 'react';
import Navbar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
