import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = ({ toggled }) => {
  return (
    <header className="toolbar">
      <div className="toolbarLogo">
        <Logo />
      </div>
      <DrawerToggle clicked={toggled} />
      <nav className="desktop">
        <Items />
      </nav>
    </header>
  );
}

export default Toolbar;