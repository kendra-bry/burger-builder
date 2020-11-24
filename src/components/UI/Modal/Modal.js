import React, { Component } from "react";
import "./Modal.css";
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    const { children, show, modalClosed } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className="modal"
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}>
          {children}
        </div>
      </Aux>
    )
  }
};

export default Modal;
