import React from "react";
import "./Modal.css";
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({ children, show, modalClosed }) => {
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

export default Modal;
