import React, { Component } from "react";
import StoredPlayers from "./StoredPlayers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Navbar } from "react-bootstrap";
class Welcome extends Component {
  state = {
    game: this.props.game,
    users: false
  };
  render() {
    let message = "Enter Player's Names ".concat(
      this.state.users ? "" : "or choose one of the list"
    );
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 style={{ color: "white" }}>{this.state.game}</h1>
        </Row>
        <Row className="justify-content-center">
          <h2 style={{ color: "white" }}>Welcome players</h2>
        </Row>
        <Row className="justify-content-center">
          <h3 style={{ color: "white" }}>{message}</h3>
        </Row>
        <StoredPlayers handleUserChange={this.handleUserChange} />
      </Container>
    );
  }
  handleUserChange = value => {
    this.setState({ users: value });
  };
}

export default Welcome;
