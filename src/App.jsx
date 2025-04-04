import React from "react";
import AcceptReject from "./components/AcceptReject";
import CustomDistWalker from "./components/CustomDistWalker";

const App = () => {
  return (
    <div className="App">
      <h1>Custom Probability Distributions</h1>
      <div className="canvas-container">
        <p>Accept-Reject Distribution</p>
        <AcceptReject />
      </div>
      <div className="canvas-container">
        <p>Random walk that follows quadratic distribution</p>
        <CustomDistWalker />
      </div>
    </div>
  );
};

export default App;
