import React from "react";
import Pallette from "./Palatte";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[4]));

    return (
      <div className="App">
        <Pallette palette={generatePalette(seedColors[4])}></Pallette>
      </div>
    );
  }
}

export default App;
