import React from 'react';
import './Items.css';
import Item from './Item/Item';

const Items = () => {
  return (
    <ul className="items">
      <Item link="/burger-builder" exact>Burger Builder</Item>
      <Item link="/burger-builder/orders" >Orders</Item>
    </ul>
  );
}

export default Items;