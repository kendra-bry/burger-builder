import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = props => {
  const { ingredientAdded, ingredientRemoved, disabled, price, purchasable, ordered } = props;
  return (
    <div className="controls">
      <p>
        Current Price: <strong>${price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl =>
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]} />
      )}
      <button
        disabled={!purchasable}
        onClick={ordered}
        className="orderBtn mt3">
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
