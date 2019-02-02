import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import { createContext } from "react";
class App extends Component {
  render() {
    const Theme = createContext( "white" );
    return (
      <Theme.Provider>
        <Game />
      </Theme.Provider>
    );
  }
}

export default App;
