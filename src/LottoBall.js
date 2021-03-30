import React, { Component } from "react";
import "./LottoBall.css";

class LottoBall extends Component {
  render() {
    return (
      <div className="LottoBall">
        <h3 className="LottoBall-num">{this.props.num}</h3>
      </div>
    );
  }
}

export default LottoBall;
