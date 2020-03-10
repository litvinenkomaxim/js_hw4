import React from 'react';

const ButtonMinus = props => {
  return <button onClick={props.handleClickMinus}>{props.text}</button>;
};

export default ButtonMinus;
