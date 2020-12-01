import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';

const Item = ({ children, link, exact }) => {
  return (
    <li className="item">
      <NavLink
        exact={exact}
        to={link}
      >{children}</NavLink>
    </li>
  );
}

export default Item;