import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';

const Item = ({ children, link, exact }) => {
  return (
    <li className="item">
      <NavLink
        to={link}
      >{children}</NavLink>
    </li>
  );
}

export default Item;