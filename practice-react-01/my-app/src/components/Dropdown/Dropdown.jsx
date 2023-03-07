import React, { Component } from "react";
import { Menu } from "./Dropdown.styled";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? "hide" : "show"}
        </button>

        {this.state.visible && <Menu />}
      </div>
    );
  }
}

export default Dropdown;
