import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import "./Palette.css";
import "rc-slider/assets/index.css";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  }
};

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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const { classes } = this.props;
    const colorBoxs = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette={true}
      ></ColorBox>
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        ></Navbar>
        <div className="pallette-colors">{colorBoxs}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}></PaletteFooter>
      </div>
    );
  }
}

export default withStyles(styles)(Palatte);
