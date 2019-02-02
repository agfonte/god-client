import React, { Component } from "react";
import { Row, Container, Button } from "react-bootstrap";
class ChooseHand extends Component {
  render() {
    let { moves } = this.props;
    console.log(moves);
    const chooseHand = (
      <Container className={"justify-content-center"}>
        <Row className={"justify-content-around"}>
          {moves.map(mov => {
            return (
              <div key={mov}>
                <Button
                  onClick={evt => {
                    this.props.onChoose(evt, mov, this.props.user);
                  }}
                >
                  {mov.toUpperCase()}
                </Button>
              </div>
            );
          })}
        </Row>
      </Container>
    );
    return chooseHand;
  }
}

export default ChooseHand;
