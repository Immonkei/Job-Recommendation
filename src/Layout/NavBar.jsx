import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGift, FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);

  const linkClass =
    'text-gray-600 hover:text-blue-600 transition font-medium';
  const activeClass = 'text-blue-600 font-semibold';

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaGift className="text-blue-600 text-2xl" />
        <span className="font-bold text-lg text-gray-800">Thrive</span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          About
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          Jobs
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? activeClass : linkClass)}
        >
          Services
        </NavLink>
      </div>

      {/* Auth Buttons or Account */}
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <NavLink
              to="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </NavLink>
          </>
        ) : (
          <NavLink to="/profile" className="flex items-center space-x-2">
            <FaUserCircle className="text-2xl text-blue-600" />
            <span className="text-gray-700 font-medium">My Account</span>
          </NavLink>
        )}

        {/* Demo only: Toggle login state */}
        {/* <button
          onClick={handleLoginToggle}
          className="ml-2 px-2 py-1 text-xs border border-gray-300 rounded"
        >
          Toggle Login
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
