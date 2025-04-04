import React from "react";
import AcceptReject from "./components/AcceptReject";

const App = () => {
  return (
    <div className="App">
      <h1>Custom Probability Distributions</h1>
      <div className="canvas-container">
        <p>Accept-Reject Distribution</p>
        <AcceptReject />
      </div>
    </div>
  );
};

export default App;
