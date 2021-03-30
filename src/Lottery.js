import React, { Component } from "react";
import "./Lottery.css";
import LottoBall from "./LottoBall";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBall: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = {
      num: Array.from({ length: this.props.numBall }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((st) => ({
      num: st.num.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1),
    }));
  }

  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.num.map((n) => (
            <LottoBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
