import React from "react";
import { Controls } from "./Controls";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    console.log("Increment");
    console.log(this);

    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    console.log("Decrement");
    console.log(this);

    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
