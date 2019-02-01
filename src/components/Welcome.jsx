import React, { Component } from "react";
import StoredPlayers from "./StoredPlayers";
class Welcome extends Component {
  state = {
    game: this.props.game
  };
  render() {
    return (
      <div>
        <h1>{this.state.game}</h1>
        <h2>Welcome players</h2>
        <h3>Enter Player's Names or choose one of the list to your right</h3>
        <StoredPlayers />
      </div>
    );
  }
}

export default Welcome;
