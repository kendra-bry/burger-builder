import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
  let classes = ['spinner'];
  if (props.looks) {
    classes = ['spinner', props.looks]
  }
  return (
    <div className={classes.join(' ')}>Loading...</div>
  );
}

export default Spinner;