import React, { Component } from "react";
import "./Lottery.css";
import LottoBall from "./LottoBall";

class Lottery extends Component {
  render() {
    let rand40 = Math.floor(Math.random() * 40) + 1;
    return (
      <div className="Lottery">
        <LottoBall num={5} />
      </div>
    );
  }
}

export default Lottery;
