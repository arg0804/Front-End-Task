import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import icon1 from '../assets/icons/ICON - Search.png';
import icon2 from '../assets/icons/Group 46.png';
import icon3 from '../assets/icons/Group 47.png';
import icon4 from '../assets/icons/Group 53.png';
import icon5 from '../assets/icons/Group 54.png';
import icon6 from '../assets/icons/Group 56.png';
import profile from '../assets/1699022012732profile1.jpg';

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className={`main-menu-container ${isMenuOpen ? 'opened' : 'closed'}`}
      onMouseEnter={toggleMenu}
      onMouseLeave={() => isMenuOpen && toggleMenu()} 
    >
      <div className="profile-info">
          <img src={profile} alt="Profile" />
          <span>John Smith</span>
        </div> 
      <div className="menu-options">
      <Link to="/search">
          {isMenuOpen && (
            <>
              <img src={icon1} alt="Search" />
              <span>Search</span>
            </>
          )}
          {!isMenuOpen && <img src={icon1} alt="Search" />}
        </Link>
        <Link to="/">
          {isMenuOpen ? (
            <>
              <img src={icon2} alt="Home" />
              <span>Home</span>
            </>
          ) : (
            <img src={icon2} alt="Home" />
          )}
        </Link>
        <Link to="/TV-shows">
        {isMenuOpen ? (
            <>
              <img src={icon6} alt="TV-shows" />
              <span>TV-Shows</span>
            </>
          ) : (
            <img src={icon6} alt="TV-shows" />
          )} 
        </Link>
        
        <Link to="/genres">
        {isMenuOpen ? (
            <>
              <img src={icon4} alt="Genres" />
              <span>Genres</span>
            </>
          ) : (
            <img src={icon4} alt="Genres" />
          )}
        </Link>
        <Link to="/movies">
        {isMenuOpen ? (
            <>
              <img src={icon5} alt="Movies" />
              <span>Movies</span>
            </>
          ) : (
            <img src={icon5} alt="Movies" />
          )}
        </Link>
        <Link to="/watch-leater">
        {isMenuOpen ? (
            <>
              <img src={icon3} alt="watch-leater" />
              <span>Watch-leater</span>
            </>
          ) : (
            <img src={icon3} alt="watch-leater" />
          )}
        </Link>

         

        <div className="additional-options">
          <Link to="/language">Language</Link>
          <Link to="/get-help">Get Help</Link>
          <Link to="/exit">Exit</Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
