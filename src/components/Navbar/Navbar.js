import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar_heading'>
          <h2>Categories</h2>
        </div>
        <div className='navbar_links'>
          <ul>
            <Link to='/category/sport'>
              <li>Sport</li>
            </Link>
            <Link to='/category/travel'>
              <li>Travel</li>
            </Link>
            <Link to='/category/history'>
              <li>History</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
