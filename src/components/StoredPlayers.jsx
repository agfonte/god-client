import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Button } from "react-bootstrap";
class StoredPlayers extends Component {
  state = {
    users: [],
    handleUserChange: this.props.handleUserChange,
    handlers: []
  };

  componentWillMount() {
    const axios = require("axios");
    axios
      .get("http://localhost:4000/api/users")
      .then(res_users => {
        if (res_users.data.users.length > 0) {
          this.state.handleUserChange(true);
        }
        this.setState({ users: res_users.data.users });
      })
      .catch(err => {
        return <div />;
      });
  }

  render() {
    let { users } = this.state;
    return (
      <Row className="justify-content-between">
        {users.slice(0, 4).map(user => (
          <Card
            key={user.user}
            className={"container mb-2 ml-2"}
            style={{ width: "auto" }}
          >
            <Card.Title className="justify-content-center">
              <Card.Text className="h3">{user.user}</Card.Text>
            </Card.Title>
            <Card.Body>
              <Row className="justify-content-center">
                <Card.Text className="mr-2">Win: {user.stats.win}</Card.Text>
                <Card.Text>Lose: {user.stats.lose}</Card.Text>
              </Row>
              <Row className="justify-content-center">
                <Button
                  onClick={evt => {
                    this.handleChooseUser(user.user);
                    evt.target.disabled = true;
                  }}
                >
                  Choose
                </Button>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
  handleChooseUser = user => {
    this.props.handleChoosePlayer(user);
  };
}

export default StoredPlayers;
