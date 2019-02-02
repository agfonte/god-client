import React, { Component } from "react";
import Welcome from "./Welcome";
import NewUsersForm from "./NewUsersForm";
import Settings from "./Settings";
import { Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Battlefield from "./Battlefield";
class Game extends Component {
  state = { selectPlayers: true };
  render() {
    let welcomeScreen = undefined;
    let battlefield = undefined;
    if (this.state.selectPlayers) {
      welcomeScreen = (
        <Container className="center">
          <Row>
            <Welcome game={"GoD | Game of Drones"} />
          </Row>
          <Row className="justify-content-center">
            <NewUsersForm />
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
      battlefield = <Battlefield>Battle</Battlefield>;
    }
    return (
      <div>
        <div>{welcomeScreen || battlefield}</div>
      </div>
    );
  }
}

export default Game;
