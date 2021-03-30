import React, { Component } from "react";
import Box from "./Box";

class BoxContainer extends Component {
  static defaultProps = {
    colors: ["red", "green", "blue", "yellow", "pink", "purple"],
  };
  render() {
    return (
      <div className="BoxContainer">
        {this.props.colors.map((n) => (
          <Box color={n} />
        ))}
      </div>
    );
  }
}

export default BoxContainer;
