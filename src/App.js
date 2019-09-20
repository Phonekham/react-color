import React from "react";
import Pallette from "./Palatte";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Pallette {...seedColors[4]}></Pallette>
    </div>
  );
}

export default App;
