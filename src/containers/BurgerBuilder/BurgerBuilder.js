import React, { Component } from "react";
import axios from '../../axios-orders';

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const PRICES = {
  lettuce: 0.15,
  bacon: 0.75,
  cheese: 0.5,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    axios.get('/ingredients.json')
      .then(ingredients => {
        this.setState({ ingredients: ingredients.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }


  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceIncrease = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceIncrease;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchase(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchase(updatedIngredients);
  };

  updatePurchase(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancel = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinue = () => {
    const ingredients = encodeURIComponent(JSON.stringify(this.state.ingredients));
    const price = encodeURIComponent(this.state.totalPrice);
    this.props.history.push({
      pathname: '/checkout',
      search: `?ingredients=${ingredients}&price=${price}`
    })
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients couldn't be loaded.</p> : <Spinner looks="mt6" />
    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice} />
        </>
      )
      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancel={this.purchaseCancel}
        purchaseContinue={this.purchaseContinue}
        price={this.state.totalPrice} />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return <>
      <Modal
        show={this.state.purchasing}
        modalClosed={this.purchaseCancel}>
        {orderSummary}
      </Modal>
      {burger}
    </>;
  };
};

export default withErrorHandler(BurgerBuilder, axios);
