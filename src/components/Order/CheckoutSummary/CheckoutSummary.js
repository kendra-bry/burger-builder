import React from 'react';

import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
  const { ingredients, checkoutCanceled, checkoutContinued } = props;
  return (
    <div className='checkoutSummary'>
      <h1>We hope it tastes good!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button
        clicked={checkoutCanceled}
        btnType="danger">
        CANCEL
      </Button>
      <Button
        clicked={checkoutContinued}
        btnType="success">
        CONTINUE
      </Button>
    </div>
  );
}

export default CheckoutSummary;