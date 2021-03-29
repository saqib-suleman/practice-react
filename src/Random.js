import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }

  randNum = () => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ number: rand });
  };

  render() {
    return (
      <div className="Random">
        <h1>Your Number is {this.state.number}</h1>
        <h2>
          {this.state.number === 7 ? (
            "You win!!"
          ) : (
            <button onClick={this.randNum}>Random Number</button>
          )}
        </h2>
      </div>
    );
  }
}

export default Random;
