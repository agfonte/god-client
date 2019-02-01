import React, { Component } from "react";
import Welcome from "./Welcome";
import NewUsersForm from "./NewUsersForm";
import Settings from "./Settings";
class Game extends Component {
  state = { selectPlayers: true, moves: [] };
  componentWillMount() {
    fetch("http://localhost:4000/api/moves", { method: "GET" })
      .then(response => response.json())
      .then(resmoves => {
        console.log(resmoves["moves"]);
        this.setState({ moves: resmoves["moves"] });
      })
      .catch(err => {
        return <div />;
      });
  }
  render() {
    let welcomeScreen = undefined;
    let battlefield = undefined;
    if (this.state.selectPlayers) {
      welcomeScreen = (
        <div>
          <Welcome game={"GoD | Game of Drones"} />
          <NewUsersForm />
          <button onClick={e => this.setState({ selectPlayers: false })}>
            Battle
          </button>
        </div>
      );
    } else {
      battlefield = <div>Battle</div>;
    }
    return (
      <div>
        <div>
          <div>{welcomeScreen || battlefield}</div>
        </div>
        <div>
          <Settings />
        </div>
      </div>
    );
  }
}

export default Game;
