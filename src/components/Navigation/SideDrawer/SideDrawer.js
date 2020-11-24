import React from 'react';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi'
import './SideDrawer.css';

const SideDrawer = ({ closed, open }) => {
  let attachedClasses = ['drawer', 'close'];
  if (open) {
    attachedClasses = ['drawer', 'open'];
  }
  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className="drawerLogo">
          <Logo />
        </div>
        <nav>
          <Items />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;