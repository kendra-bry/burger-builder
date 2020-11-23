import React from "react";
import Aux from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button"

const OrderSummary = ({ ingredients, purchaseCancel, purchaseContinue }) => {
  const summary = Object.keys(ingredients).map(igKey => (
    <li key={igKey} className="ttc">
      {igKey}: {ingredients[igKey]}
    </li>
  ));
  return (
    <Aux>
      <h3 className="tc">Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{summary}</ul>
      <p>Continue to checkout?</p>
      <div className="tc">
        <Button btnType="danger" clicked={purchaseCancel}>CANCEL</Button>
        <Button btnType="success" clicked={purchaseContinue}>CONTINUE</Button>
      </div>
    </Aux>
  );
};

export default OrderSummary;
