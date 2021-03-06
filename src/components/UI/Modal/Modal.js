import React, { Component } from "react";
import "./Modal.css";
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    const { children, show, modalClosed } = this.props;
    return <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}>
        {children}
      </div>
    </>;
  }
};

export default Modal;
