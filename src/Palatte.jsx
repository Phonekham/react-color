import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palatte extends Component {
  render() {
    const colorBoxs = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name}></ColorBox>
    ));
    return (
      <div className="pallette">
        <div className="pallett-colors">{colorBoxs}</div>
      </div>
    );
  }
}

export default Palatte;
