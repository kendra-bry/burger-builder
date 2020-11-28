import React, { Component } from 'react';
import axios from '../../../axios-orders';

import './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    loading: false,
    submitted: false,
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kendra Bryant',
        adderss: {
          street: '100 E Center St',
          city: 'Provo',
          state: 'UT',
          zip: '84606'
        },
        email: 'kendraa@utahcounty.gov'
      },
      deliveryMethod: 'fastest'
    }
    setTimeout(() => {
      axios.post('/orders.json', order)
        .then(data => {
          this.setState({ loading: false, submitted: true });
          setTimeout(() => { this.props.history.push('/'); }, 3000);
        })
        .catch(error => {
          this.setState({ loading: false, submitted: false });
          console.log(error);
        })
    }, 2000)

  }

  render() {
    let orderForm = (
      <>
        <h4>Enter your contact information:</h4>
        <form action="">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" placeholder="Your Name" />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" placeholder="Your Email" />
          <label htmlFor="street">Street Address:</label>
          <input type="text" id="street" placeholder="Street Address" />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" placeholder="City" />
          <label htmlFor="state">State:</label>
          <input type="text" id="state" placeholder="State" />
          <label htmlFor="zip">Zip:</label>
          <input type="text" id="zip" placeholder="Zip" />
          <hr className="mt3" />
          <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      </>
    );
    if (this.state.loading) {
      orderForm = <Spinner />;
    } else if (this.state.submitted) {
      orderForm = <h4>Thank you. Your order has been received.</h4>
    }
    return (
      <div className="contactData">
        {orderForm}
      </div>
    );
  }
}

export default ContactData;