import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img
          className={this.props.flipping && "animate__animated animate__flip"}
          src={this.props.info.imgSrc}
          alt={this.props.info.side}
        />
      </div>
    );
  }
}

export default Coin;
