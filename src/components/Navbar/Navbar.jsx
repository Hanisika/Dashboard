import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/order">Order Task</Link>
    </div>
  );
};

export default Navbar;