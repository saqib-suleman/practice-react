import React, { Component } from "react";
import BoxForm from "./BoxForm";
import ColorBox from "./ColorBox";

class BoxMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
    };
    this.addBox = this.addBox.bind(this);
  }

  addBox(style) {
    this.setState((st) => ({
      styles: [...st.styles, style],
    }));
  }

  removeBox(id) {
    this.setState({
      styles: this.state.styles.filter((style) => style.id !== id),
    });
  }

  render() {
    return (
      <div>
        <BoxForm addBox={this.addBox} />
        {this.state.styles.map((style) => (
          <ColorBox
            id={style.id}
            key={style.id}
            style={style}
            removeBox={() => this.removeBox(style.id)}
          />
        ))}
      </div>
    );
  }
}

export default BoxMaker;
