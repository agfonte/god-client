import React from "react";
import { Row, Button } from "react-bootstrap";
export default function ShowHandWinner(props) {
  console.log(props.handUser1);
  if (props.winner === undefined) {
    return (
      <Row>
        <h1>
          The is no Winner of the Round {props.round}. The result was a tie.
        </h1>
        <h2>
          {props.handUser1}  {props.handUser2}
        </h2>
        <h1>Get ready for the next round.</h1>
        <Button onClick={props.nextRound}>Next Round</Button>
      </Row>
    );
  }
  return (
    <Row>
      <h1>
        The Winner of the Round {props.round} is {props.winner}
        Congratulations!!! and get ready for the next round.
        <Button onClick={props.nextRound}>Next Round</Button>
      </h1>
    </Row>
  );
}
