import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "", height: "", width: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    this.setState({ backgroundColor: "", height: "", width: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="color"
          name="backgroundColor"
          placeholder="color"
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <input
          id="height"
          name="height"
          placeholder="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <input
          id="width"
          name="width"
          placeholder="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <button>Add Box!</button>
      </form>
    );
  }
}

export default BoxForm;
