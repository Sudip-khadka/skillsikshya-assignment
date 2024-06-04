import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Assignments</h1>
      </div>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/discuss">Discuss</Link></li>
        <li><Link to="/contests">Contests</Link></li>
      </ul>
      <div className="profile">
        <Link to='/login'><Button type='profile' className='profile' /></Link>
        <p>Notify</p>
      </div>
    </nav>
  );
}

export default Navbar;
