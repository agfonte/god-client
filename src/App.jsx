import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Game
        className={"justify-content-center align-content-center"}
        styles={{ position: "relative", display:"flex" }}
      />
    );
  }
}

export default App;
