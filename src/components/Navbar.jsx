import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
  }, [darkMode]);
  return (
    <nav className="navbar">
      <h1>
        <Link to='/'>
          Crypto Tracker
        </Link>
      </h1>
      <div className="dark-mode__toggle">
        <div
          onClick={()=>{setDarkMode(!darkMode)}}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
