import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const orders = [];
        for (let key in res.data) {
          orders.push({ ...res.data[key], id: key })
        }
        this.setState({ loading: false, orders });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      })
  }

  render() {
    return (
      <>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            price={order.price}
            ingredients={order.ingredients} />))}
      </>
    )
  }
}

export default withErrorHandler(Orders, axios);