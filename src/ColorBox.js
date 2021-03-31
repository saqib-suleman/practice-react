import React, { Component } from "react";

class ColorBox extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <button onClick={this.props.removeBox}>Remove Me!</button>
      </div>
    );
  }
}

export default ColorBox;
