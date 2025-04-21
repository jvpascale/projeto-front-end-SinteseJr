import React from 'react';
import Hamburguer from '../../assets/Buttons_Group.jpg';

const NavMenu = () => {
  return (
    <nav className="navmenu">
    <img src={Hamburguer} alt="Menu" className="navmenu_icon" />

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