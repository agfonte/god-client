import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  FormGroup,
  FormControl
} from "react-bootstrap";
import SettingsButton from "./SettingsButton";
class Settings extends Component {
  state = { close: false, users: [], moves: [] };
  render() {
    let rstyles = { marginTop: 5 };
    let cstyles = { width: "40rem" };
    return (
      <Modal centered show>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Delete Users</h5>
          <ul>
            {this.state.users.map(user => {
              return <li>user.user</li>;
            })}
          </ul>
          <hr />
          <h5>Moves</h5>
          <Row>
            <h6>Add Move</h6>
            <FormControl type="text" placeholder="Killer" />
            <FormControl type="text" placeholder="Killed" />
            <Button>Submit</Button>
          </Row>

          <hr />
          <h6>Delete Move</h6>
          <hr />
          <h6>Edit Move</h6>
          <hr />
          <h6>Amount of top</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"primary"} onClick={this.handleCloseModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  log = evt => {
    console.log(evt);
  };
}

export default Settings;
