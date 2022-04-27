import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-siit px-10 py-2 flex justify-between items-center">
      <Link to={'/'}>
        <img src="https://assets.website-files.com/6214ee30440885a599757664/6257ee63b13b1d9a80dfb3d2_Group%201%20(4).svg" />
      </Link>
      <div>
        <ul className="text-xl text-white flex justify-around gap-5">
          <Link to={'/users'}>
            <li>Users</li>
          </Link>
          <Link to={'/services'}>
            <li>Services</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
