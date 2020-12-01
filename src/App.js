import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/burger-builder" exact component={BurgerBuilder} />
            <Route path="/burger-builder/checkout" component={Checkout} />
            <Route path="/burger-builder/orders" component={Orders} />
            <Redirect from="/" to="burger-builder" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
