import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Container,
  Col,
  Row
} from "react-bootstrap";
class NewUsers extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Form className="form-inline">
          <Col>
            <FormGroup>
              <label style={{ color: "white" }} htmlFor="player1">
                Name Player 1
              </label>
              <FormControl
                type="input"
                placeholder="Player 1"
                name={"Name Player 1"}
              />
              <Button disabled>Clear</Button>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label style={{ color: "white" }} htmlFor="player2">
                Name Player 2
              </label>
              <FormControl
                type="input"
                placeholder="Player 2"
                name={"Name Player 2"}
              />
              <Button disabled>Clear</Button>
            </FormGroup>
          </Col>
        </Form>
      </Row>
    );
  }
}

export default NewUsers;
