import React, { Component } from "react";
import "./RollDie.css";
import Die from "./Die";

class RollDie extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "five",
      rolling: false,
    };
  }

  roll = () => {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ rolling: true });

    setTimeout(() => {
      this.setState({ die1: newDie1, die2: newDie2 });
    }, 600);

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 850);
  };

  render() {
    // let rand1 = Math.floor(Math.random() * 6);
    // let rand2 = Math.floor(Math.random() * 6);
    // const dies = ["one", "two", "three", "four", "five", "six"];
    return (
      <div className="RollDie">
        <div className="RollDie-dies">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDie;
