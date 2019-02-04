import React, { Component } from "react";
import NewUsers from "./NewUsers";
import { Button, Container, Row, Modal, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BattleField from "./BattleField/BattleField";
import SettingsButton from "./Settings/SettingsButton";
import Settings from "./Settings/Settings";
class Game extends Component {
  state = {
    selectPlayers: true,
    users: false,
    user1: undefined,
    user2: undefined,
    show: false,
    settings: true
  };

  handleUserChange = (user1, user2) => {
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
    let settings = <Settings />;
    let message = "Enter Player's Names ".concat(
      this.state.users ? "or choose one of the list" : ""
    );

    if (this.state.selectPlayers) {
      welcomeScreen = (
        <Container className="center">
          <Row className="justify-content-center" style={{ marginTop: 5 }}>
            <h1 style={{ color: "red" }}>{"GoD"}</h1>
            <h1 style={{ color: "white" }}>{"| Game of Drones"}</h1>
            <div style={{ padding: 5 }}>
              <SettingsButton handleSettingsClick={this.handleSettingsClick} />
            </div>
          </Row>
          <Row className="justify-content-center" />
          <Row className="justify-content-center">
            <h2 style={{ color: "white" }}>Welcome players</h2>
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
              <BattleField
                user1={this.state.user1}
                user2={this.state.user2}
                back={this.homeScreen}
              />
            </Col>
            <Col md={1}>
              <h1>{this.state.user2}</h1>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <div>{this.state.settings ? settings : welcomeScreen || battlefield}</div>
    );
  }
  handleSettingsClick = () => {
    this.setState({ settings: true });
  };
  homeScreen = () => {
    this.setState({
      selectPlayers: true,
      users: false,
      user1: undefined,
      user2: undefined,
      show: false
    });
  };
  handleCloseModal = () => {
    this.setState({ show: false });
  };
  checkUsers = async () => {
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
      const axios = require("axios");
      await axios
        .get("http://localhost:4000/api/users")
        .then(users => {
          let exist = { user1: false, user2: false };
          for (let user in users.data.users) {
            if (user.user === user1) {
              exist.user1 = true;
            }
            if (user.user === user2) {
              exist.user2 = true;
            }
          }
          if (!exist.user1) {
            axios.post("http://localhost:4000/api/users", {
              user: user1,
              stats: {
                win: 0,
                lose: 0
              },
              games: []
            });
          }
          if (!exist.user2) {
            axios.post("http://localhost:4000/api/users", {
              user: user2,
              stats: {
                win: 0,
                lose: 0
              },
              games: []
            });
          }
        })
        .catch(err => {
          return false;
        });
      return true;
    }
  };
}

export default Game;
