import React from 'react';
import './Item.css';

const Item = ({children, link, active}) => {
  return (
    <li className="item">
      <a 
        href={link}
        className={active ? 'active' : null}
        >{children}</a>
      </li>
  );
}

export default Item;