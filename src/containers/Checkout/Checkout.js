import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = JSON.parse(decodeURIComponent(query.get('ingredients')));
    const price = decodeURIComponent(query.get('price'));
    this.setState({ ingredients, price });
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/burger-builder/checkout/contact-data');
  }

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route
          path={`${path}/contact-data`}
          render={(props) => <ContactData
            {...props}
            ingredients={this.state.ingredients}
            price={this.state.price} />} />
      </div>
    );
  }
}

export default Checkout;