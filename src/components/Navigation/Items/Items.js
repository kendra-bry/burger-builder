import React from 'react';
import './Items.css';
import Item from './Item/Item';

const Items = () => {
  return (
    <ul className="items">
      <Item link="#" active>Burger Builder</Item>
      <Item link="#" >Checkout</Item>
    </ul>
  );
}

export default Items;