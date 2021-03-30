import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      isFlipping: false,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    function choose(arr) {
      let randIdx = Math.floor(Math.random() * arr.length);
      return arr[randIdx];
    }
    const newCoin = choose(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        isFlipping: true,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
    setTimeout(() => {
      this.setState({ isFlipping: false });
    }, 1000);
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFlip">
        <h2>Let's Flip a Coin</h2>
        {this.state.currCoin && (
          <Coin info={this.state.currCoin} flipping={this.state.isFlipping} />
        )}
        <button onClick={this.handleClick}>Flip the coin!!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlip;
