import React from 'react'
import './Button.css'

const Button = ({ children, clicked, btnType }) => (
  <button
    className={['grow', 'button', btnType].join(' ')}
    onClick={clicked}
  >{children}</button>
);

export default Button;