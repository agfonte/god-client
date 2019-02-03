import React, { Component } from "react";
import { Row, Button, Col, Container } from "react-bootstrap";
class ChooseHand extends Component {
  render() {
    let { moves } = this.props;
    const chooseHand = (
      <Container>
        <Row className={"justify-content-center text-center"}>
          {moves.map(mov => {
            return (
              <Col
                xs={1}
                key={mov}
                className={"justify-content-center text-center"}
              >
                <Button
                  onClick={evt => {
                    this.props.onChoose(evt, mov, this.props.user);
                  }}
                >
                  {mov.toUpperCase()}
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
    return chooseHand;
  }
}

export default ChooseHand;
