import React, { Component } from 'react';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }
  sideDrawerToggleHandler = () => {
    this.setState((state) => ({ showSideDrawer: !state.showSideDrawer }));
  }

  render() {
    return <>
      <Toolbar toggled={this.sideDrawerToggleHandler} />
      <SideDrawer
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler} />
      <main className='content'>{this.props.children}</main>
    </>;
  };
};

export default Layout;
