import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
class Welcome extends Component {
  state = {
    game: this.props.game,
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 style={{ color: "white" }}>{this.state.game}</h1>
        </Row>
        <Row className="justify-content-center">
          <h2 style={{ color: "white" }}>Welcome players</h2>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
