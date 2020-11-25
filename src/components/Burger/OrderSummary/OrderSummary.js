import React from "react";
import Button from "../../UI/Button/Button"

const OrderSummary = (props) => {
  const { ingredients, purchaseCancel, purchaseContinue, price } = props;
  const summary = Object.keys(ingredients).map(igKey => (
    <li key={igKey} className="ttc">
      {igKey}: {ingredients[igKey]}
    </li>
  ));
  return <>
    <h3 className="tc">Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>{summary}</ul>
    <p><strong>Total Price: ${price.toFixed(2)} </strong></p>
    <p>Continue to checkout?</p>
    <div className="tc">
      <Button btnType="danger" clicked={purchaseCancel}>CANCEL</Button>
      <Button btnType="success" clicked={purchaseContinue}>CONTINUE</Button>
    </div>
  </>;
};

export default OrderSummary;
