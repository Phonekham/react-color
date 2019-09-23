import React from "react";
import { Route, Switch } from "react-router-dom";
import Pallette from "./Palatte";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps}></PaletteList>
          )}
        ></Route>
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Pallette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            ></Pallette>
          )}
        ></Route>
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette></SingleColorPalette>}
        ></Route>
      </Switch>
      // <div className="App">
      //   <Pallette palette={generatePalette(seedColors[4])}></Pallette>
      // </div>
    );
  }
}

export default App;
