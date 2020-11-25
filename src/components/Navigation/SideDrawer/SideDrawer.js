import React from 'react';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const SideDrawer = ({ closed, open }) => {
  let attachedClasses = ['drawer', 'close'];
  if (open) {
    attachedClasses = ['drawer', 'open'];
  }
  return <>
    <Backdrop show={open} clicked={closed} />
    <div className={attachedClasses.join(' ')}>
      <div className="drawerLogo">
        <Logo />
      </div>
      <nav>
        <Items />
      </nav>
    </div>
  </>;
}

export default SideDrawer;