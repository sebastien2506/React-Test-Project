import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-yellow-300 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/profile/" className="text-white hover:text-yellow-300 transition-colors duration-300">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
