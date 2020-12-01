import React from 'react';

import './Order.css';

const Order = ({ ingredients, price }) => {
  const ingr = [];
  for (let key in ingredients) {
    ingr.push({ name: key, amount: ingredients[key] })
  }
  // console.log(ingr);
  const output = ingr.map(ig => {
    return (
      <span
        style={{
          display: 'inline-block',
          textTransform: 'capitalize',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
        key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    )
  });
  return (
    <div className="order">
      <p>Ingredients: {output}</p>
      <p>Price: <strong>${Number.parseFloat(price).toFixed(2)}</strong></p>
    </div>
  );
}

export default Order;