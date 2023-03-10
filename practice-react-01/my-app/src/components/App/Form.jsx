import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    nick: "",
    level: "junior",
    license: false,
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = (evt) => {
    //const { name } = evt.currentTarget;

    this.setState({
      license: !this.state.license,
    });
  };

  reset = () => {
    this.setState({ name: "", nick: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          NickName
          <input
            type="text"
            name="nick"
            value={this.state.nick}
            onChange={this.handleChange}
          />
        </label>

        <p>Your level:</p>
        <label>
          Junior
          <input
            type="radio"
            name="level"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.level === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="level"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.level === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="level"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.level === "senior"}
          />
        </label>
        <label>
          Agree
          <input
            type="checkbox"
            name="licence"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
        </label>

        <button type="submit" disabled={!this.state.license}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
