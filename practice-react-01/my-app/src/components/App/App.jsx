import { Component } from "react";
import Reader from "../Reader/Reader";
import data from "../../publications.json";

export class App extends Component {
  state = {
    inputValue: " ",
  };

  render() {
    return (
      <>
        <Reader items={data} />
      </>
    );
  }
}
