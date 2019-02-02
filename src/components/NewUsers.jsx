import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  Row,
  Container
} from "react-bootstrap";
import StoredPlayers from "./StoredPlayers";
class NewUsers extends Component {
  state = {
    user1: undefined,
    user2: undefined,
    btnp1: true,
    btnp2: true
  };

  handleChoosePlayer = p => {
    if (this.state.user1 === undefined) {
      this.setState({ user1: p, btnp1: false });
    } else {
      this.setState({ user2: p, btnp2: false });
    }
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <StoredPlayers
            handleUserChange={this.props.handleUserChange}
            handleChoosePlayer={this.handleChoosePlayer}
            user1={this.state.user1}
            user2={this.state.user2}
          />
        </Row>
        <Row className="justify-content-center">
          <Form className="form-inline">
            <Col>
              <FormGroup>
                <label
                  style={{ color: "white", fontSize: "20px" }}
                  htmlFor="player1"
                >
                  Name Player 1
                </label>
                <FormControl
                  type="input"
                  placeholder="Player 1"
                  name={"Name Player 1"}
                  defaultValue={this.state.user1}
                  onChange={evt => {
                    this.setState({
                      user1: evt.target.value
                    });
                    if (
                      evt.target.value !== undefined ||
                      evt.target.value !== ""
                    ) {
                      this.setState({ btnp1: false });
                    } else {
                      this.setState({ btnp1: true });
                    }
                  }}
                />
                <Button
                  disabled={this.state.btnp1}
                  onClick={evt => {
                    this.setState({ user1: undefined });
                    evt.target.disabled = true;
                  }}
                >
                  Clear
                </Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <label
                  style={{ color: "white", fontSize: "20px" }}
                  htmlFor="player2"
                >
                  Name Player 2
                </label>
                <FormControl
                  type="input"
                  placeholder="Player 2"
                  name={"Name Player 2"}
                  defaultValue={this.state.user2}
                  onChange={evt => {
                    this.setState({
                      user2: evt.target.value
                    });
                    if (
                      evt.target.value === "" ||
                      evt.target.value === undefined
                    ) {
                      this.setState({ btnp2: true });
                    } else {
                      this.setState({ btnp2: false });
                    }
                  }}
                />
                <Button
                  disabled={this.state.btnp2}
                  onClick={evt => {
                    this.setState({ user2: undefined });
                    evt.target.disabled = true;
                  }}
                  onChange={evt => this.setState({ user2: evt.target.value })}
                >
                  Clear
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default NewUsers;
