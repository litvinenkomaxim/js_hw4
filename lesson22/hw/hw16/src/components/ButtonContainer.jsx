import React from "react";
import CustomButton from "./Button";

class ButtonContainer extends React.Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1}));
    };

    render() {
        const { count } = this.state;

        return (
            <CustomButton
                text={`Clicked: ${count}`}
                handleClick={this.handleClick}
            ></CustomButton>
        )
    }
}

export default ButtonContainer;