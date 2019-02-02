import React, { Component } from "react";
import Welcome from "./Welcome";
import NewUsersForm from "./NewUsers";
import Settings from "./Settings/Settings";
import { Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Battlefield from "./BattleField/Battlefield";

class Game extends Component {
  state = { selectPlayers: false, users: false };

  handleUserChange = u => {
    this.setState({ users: u });
    console.log(u);
  };

  render() {
    let welcomeScreen = undefined;
    let battlefield = undefined;
    let message = "Enter Player's Names ".concat(
      this.state.users ? "or choose one of the list" : ""
    );
    if (this.state.selectPlayers) {
      welcomeScreen = (
        <Container className="center">
          <Row>
            <Welcome game={"GoD | Game of Drones"} />
          </Row>
          <Row className="justify-content-center">
            <h3 style={{ color: "white" }}>{message}</h3>
          </Row>
          <Row className="justify-content-center">
            <NewUsersForm handleUserChange={this.handleUserChange} />
          </Row>
          <Row className="justify-content-center mt-2">
            <Button onClick={e => this.setState({ selectPlayers: false })}>
              Battle
            </Button>
          </Row>
          <Row className="justify-content-center">
            <Settings />
          </Row>
        </Container>
      );
    } else {
      battlefield = (
        <Battlefield user1={"agfonte"} user2={"licuevas"}>
          Battle
        </Battlefield>
      );
    }
    return (
      <div>
        <div>{welcomeScreen || battlefield}</div>
      </div>
    );
  }
}

export default Game;
