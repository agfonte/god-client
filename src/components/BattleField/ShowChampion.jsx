import React from "react";
import { Row, Button } from "react-bootstrap";
export default function ShowChampion(props) {
  return (
    <Row>
      <h1>The Winner of the Championship is {props.winner}</h1>
      <h2>Congratulations!!!</h2>
      <Button>Play again?</Button>
    </Row>
  );
}
