import React from 'react';
import CustomButton from './Button';
//import CustomButtonMinus from './ButtonMinus';

class ButtonContainer extends React.Component {
  state = {
    count: 0
  };
  handleClickPlus = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  handleClickMinus = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>
          {`Clicked: ${count}`}
          {this.handleClick}
        </p>
        <CustomButton
          text={`Plus`}
          handleClick={this.handleClickPlus}
        ></CustomButton>
        <CustomButton
          text={'Minus'}
          handleClick={this.handleClickMinus}
        ></CustomButton>
      </div>
    );
  }
}
export default ButtonContainer;
