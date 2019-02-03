import React, { Component } from "react";
import Welcome from "./Welcome";
import NewUsers from "./NewUsers";
import Settings from "./Settings/Settings";
import { Button, Container, Row, Modal, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BattleField from "./BattleField/BattleField";

class Game extends Component {
  state = {
    selectPlayers: true,
    users: false,
    user1: undefined,
    user2: undefined,
    show: false
  };

  handleUserChange = (user1, user2) => {
    console.log(user1, user2);
    if (user1 !== undefined) {
      this.setState({ user1: user1 });
    }
    if (user2 !== undefined) {
      this.setState({ user2: user2 });
    }
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
            <NewUsers
              handleUserChange={this.handleUserChange}
              handleLoadUsers={b => this.setState({ users: b })}
              user1={this.state.user1}
              user2={this.state.user2}
            />
          </Row>
          <Row className="justify-content-center mt-2">
            <Button
              onClick={e => {
                if (this.checkUsers()) {
                  this.setState({ selectPlayers: false });
                }
              }}
            >
              Start Battle
            </Button>
          </Row>
          <Row className="justify-content-center">
            <Settings />
          </Row>
          <Modal centered show={this.state.show} onHide={this.handleCloseModal}>
            <Modal.Header>
              <Modal.Title>Undefined Players</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please fill out both player's names.</Modal.Body>
            <Modal.Footer>
              <Button variant={"primary"} onClick={this.handleCloseModal}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      );
    } else {
      battlefield = (
        <Container>
          <Row>
            <Col md={1}>
              <h1>{this.state.user1}</h1>
            </Col>
            <Col md={10}>
              <BattleField user1={this.state.user1} user2={this.state.user2}>
                Battle
              </BattleField>
            </Col>
            <Col md={1}>
              <h1>{this.state.user2}</h1>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <div>
        <div>{welcomeScreen || battlefield}</div>
      </div>
    );
  }
  handleCloseModal = () => {
    this.setState({ show: false });
  };
  checkUsers = () => {
    let { user1, user2 } = this.state;
    if (
      user1 === undefined ||
      user1 === "" ||
      user2 === undefined ||
      user2 === ""
    ) {
      this.setState({ show: true });
      return false;
    } else {
      return true;
    }
  };
}

export default Game;
