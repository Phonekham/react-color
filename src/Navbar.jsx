import React, { Component } from "react";
import Slider from "rc-slider";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#"> reactcolorpicker</a>
        </div>
        <div className="slider">
          <div className="slider-container">
            <span>Level: {level} </span>
          </div>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={changeLevel}
            step={100}
          ></Slider>
        </div>
      </header>
    );
  }
}

export default Navbar;
