import React, { useState } from "react";
import Terminal from "../Terminal/Terminal";
import logo from "./logo.svg";
import "./App.css";

function App({ count, increaseCount, decreaseCount, messages }) {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>Press buttons to see store update:</div>
          <button onClick={() => decreaseCount()} style={{ margin: "10px", width: "60px" }}>
            -
          </button>
          <button onClick={() => increaseCount()} style={{ margin: "10px", width: "60px" }}>
            +
          </button>
        </div>
        <Terminal messages={messages} />
      </header>
    </div>
  );
}

export default App;
