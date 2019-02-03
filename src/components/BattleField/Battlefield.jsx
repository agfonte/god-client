import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ChooseHand from "./ChooseHand";
import ShowHandWinner from "./ShowHandWinner";
import ShowChampion from "./ShowChampion";
class BattleField extends Component {
  state = {
    currentPlayer: this.props.user1,
    winner: undefined,
    user1: this.props.user1,
    user2: this.props.user2,
    round: 1,
    stats: {
      user1: 0,
      user2: 0
    },
    resolve: false,
    finished: false,
    currentHandP1: undefined,
    currentHandP2: undefined,
    moves: [],
    kills: {},
    style: "red"
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
    let { round, currentPlayer, moves, finished } = this.state;
    let { user1, user2 } = this.props;
    if (finished) {
      return <ShowChampion playAgain={this.playAgain} />;
    }
    return (
      <div>
        <Row className={"justify-content-center"}>
          <h1 style={{ color: "white", fontSize: "4rem" }}>
            ---Round {round}---
          </h1>
        </Row>
        <Row className={"justify-content-center"}>
          <h2 style={{ color: "white" }}>
            <Row className={"justify-content-center"}>
              <p style={{ color: "red" }}>{user1}</p>
            </Row>
            <Row className={"justify-content-center"}>
              <strong>
                <i>vs</i>
              </strong>
            </Row>
            <Row className={"justify-content-center"}>
              <p style={{ color: "green" }}>{user2}</p>
            </Row>
          </h2>
        </Row>
        <Row className={"justify-content-center"}>
          <h3 style={{ color: "white" }} className={"mr-2"}>
            Choose your hand{" "}
          </h3>
          <h3 style={{ color: this.state.style }}>
            {this.state.currentPlayer}
          </h3>
        </Row>
        <ChooseHand
          user={currentPlayer}
          round={round}
          moves={moves}
          onChoose={this.onChoose}
        />
        <ShowHandWinner
          winner={this.state.winner}
          round={round}
          nextRound={this.nextRound}
          handUser1={this.state.currentHandP1}
          handUser2={this.state.currentHandP2}
          show={this.state.resolve}
          handleCloseModal={this.nextRound}
        />
      </div>
    );
  }
  onChoose = (evt, mov, user) => {
    let { user1, user2 } = this.props;
    if (user === user1) {
      this.setState({
        currentHandP1: mov,
        currentPlayer: user2,
        style: "green"
      });
    } else {
      this.setState(
        {
          currentHandP2: mov,
          currentPlayer: user1,
          resolve: true,
          style: "red"
        },
        () => {
          this.resolveBattle();
        }
      );
    }
  };
  resolveBattle = () => {
    let { stats, currentHandP1, currentHandP2, user1, user2 } = this.state;
    const win = this.resolveHandWin(currentHandP1, currentHandP2);
    let winner;
    if (win === 0) {
      stats.user1++;
      winner = user1;
    } else if (win === 1) {
      stats.user2++;
      winner = user2;
    } else {
      winner = undefined;
    }
    if (stats.user1 === 3 || stats.user2 === 3) {
      return this.endBattle();
    } else {
      this.setState({
        stats: stats,
        winner: winner
      });
    }
  };
  resolveHandWin = (currentHandP1, currentHandP2) => {
    let { kills } = this.state;

    for (let move in kills) {
      if (
        kills[move].move[0] === currentHandP1 &&
        kills[move].move[1] === currentHandP2
      ) {
        return 0;
      } else {
        if (
          kills[move].move[0] === currentHandP2 &&
          kills[move].move[1] === currentHandP1
        ) {
          return 1;
        }
      }
    }
    return 2;
  };
  endBattle = () => {
    const axios = require("axios");
    axios
      .get("http://localhost:4000/api/users")
      .then(users => {
        console.log(users.data);
      })
      .catch(err => {
        console.log(err);
      });
    let { stats, user1, user2 } = this.state;
    console.log(stats, user1, user2);
    if (stats.user1 === 3) {
    } else {
    }
    this.setState({
      stats: { user1: 0, user2: 0 },
      resolve: false,
      finished: true,
      currentHandP1: undefined,
      currentHandP2: undefined,
      winner: undefined,
      round: 1
    });
  };
  nextRound = () => {
    let round = this.state.round;
    this.setState({
      round: round + 1,
      winner: undefined,
      resolve: false,
      currentHandP1: undefined,
      currentHandP2: undefined
    });
  };
  playAgain = () => {
    this.setState({
      stats: { user1: 0, user2: 0 },
      resolve: false,
      finished: false,
      currentHandP1: undefined,
      currentHandP2: undefined,
      winner: undefined
    });
  };
}

export default BattleField;
