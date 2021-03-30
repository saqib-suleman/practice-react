import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";

class App3 extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title={"Mini Daily"} numBall={4} maxNum={10} />
      </div>
    );
  }
}

export default App3;
