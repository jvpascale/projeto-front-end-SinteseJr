import React from 'react';

const NavMenu = () => {
  return (
    <nav className="navmenu">
        <div className="navmenu_icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="navmenu_list">
          <li className="navmenu_item">Explore</li>
          <li className="navmenu_item">Solutions</li>
          <li className="navmenu_item">About</li>
          <li className="navmenu_item">Blog</li>
          <li className="navmenu_item">Log In</li>
          <li className="navmenu_item navmenu_button">Start Now</li>
        </ul>
    </nav>
  );
};

export default NavMenu;