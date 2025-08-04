import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/register" style={{ marginRight: "20px" }}>Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
