import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
class Battlefield extends Component {
  state = {
    user1: "agfonte",
    user2: "licuevas",
    currentPlayer: "agfonte",
    round: 1,
    stats: {
      user1: 0,
      user2: 0
    },
    currentHandP1: undefined,
    currentHandP2: undefined,
    moves: [],
    kills: {}
  };
  componentWillMount() {
    const axios = require("axios");
    axios
      .get("http://localhost:4000/api/moves")
      .then(resmoves => {
        let m = resmoves.data.moves;
        let set = new Set();
        m.forEach(move => {
          set.add(move.move[0]);
          set.add(move.move[1]);
        });
        this.setState({ kills: resmoves.data.moves, moves: [...set] });
      })
      .catch(err => {
        return <div />;
      });
  }

  render() {
    let { user1, user2, round, currentPlayer, moves } = this.state;
    if (moves) {
      console.log([moves]);
    }
    return (
      <div>
        <div>
          <h1>Round {round}</h1>
          <h2>
            {user1}{" "}
            <strong>
              <i>vs</i>
            </strong>{" "}
            {user2}
          </h2>
          <h3>Choose your hand {currentPlayer}</h3>
          <Row className={"align-content-center"}>
            {moves.map(mov => {
              return (
                <Col className={"ml-md-auto"}>
                  <Button key={mov} style={{ marginLeft: "2rem" }}>
                    {mov}
                  </Button>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Battlefield;
