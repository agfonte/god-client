import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Button } from "react-bootstrap";
import { urls } from "./URL";
class StoredPlayers extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    const axios = require("axios");
    axios
      .get(urls.users)
      .then(res_users => {
        this.setState({ users: res_users.data.users });
        this.props.handleLoadUsers(res_users.data.users);
      })
      .catch(err => {
        return <div />;
      });
  }

  render() {
    let { users } = this.state;
    return (
      <Row className="justify-content-between">
        {users
          .sort((usr1, usr2) => {
            return (
              usr2.stats.win +
              usr2.stats.lose -
              (usr1.stats.win + usr1.stats.lose)
            );
          })
          .slice(0, 5)
          .map(user => (
            <Card
              key={user.user}
              className={"container mb-2 ml-2"}
              style={{ width: "auto" }}
              bg={"light"}
            >
              {/* <Card.Header>{user.user}</Card.Header> */}
              <Card.Body>
                <Card.Title>{user.user}</Card.Title>
                <Row className="justify-content-center">
                  <Card.Text className="mr-2">Win: {user.stats.win}</Card.Text>
                  <Card.Text>Lose: {user.stats.lose}</Card.Text>
                </Row>
                <Row className="justify-content-center">
                  <Button
                    disabled={
                      user.user === this.props.user1 ||
                      user.user === this.props.user2 ||
                      (this.props.user1 !== "" &&
                        this.props.user1 !== undefined &&
                        this.props.user2 !== "" &&
                        this.props.user2 !== undefined)
                    }
                    onClick={evt => {
                      this.props.handleChoosePlayer(user.user);
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
}

export default StoredPlayers;
