import React from 'react';

const Button = props => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.textPlus}</button>
      <button onClick={props.handleClickMinus}>{props.textMinus}</button>
    </div>
  );
};

export default Button;
