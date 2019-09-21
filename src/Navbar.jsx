import React, { Component } from "react";
import Slider from "rc-slider";
import "./Navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
  }
  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
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
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,0.1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span>Format Changed to {format}</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon></CloseIcon>
            </IconButton>
          ]}
        ></Snackbar>
      </header>
    );
  }
}

export default Navbar;
