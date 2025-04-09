import Logo from './logo';
import NavMenu from './navmenu';
import './style.css';
import React from 'react';


export default function Header ()  {
    return (
      <header className="header">
        <Logo />
        <NavMenu />
      </header>
    );
  };