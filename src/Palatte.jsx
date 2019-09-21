import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import "rc-slider/assets/index.css";
import Navbar from "./Navbar";

class Palatte extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
  }

  changeLevel = level => {
    this.setState({ level });
    console.log(level);
  };

  changeFormat = val => {
    this.setState({ format: val });
  };
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxs = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name}></ColorBox>
    ));
    return (
      <div className="pallette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        ></Navbar>
        <div className="pallett-colors">{colorBoxs}</div>
      </div>
    );
  }
}

export default Palatte;
