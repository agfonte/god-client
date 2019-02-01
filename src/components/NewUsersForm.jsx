import React, { Component } from "react";
class NewUsers extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>Name Player 1</label>
        <input name={"Name Player 1"} />
        <label>Name Player 2</label>
        <input name={"Name Player 2"} />
      </div>
    );
  }
}

export default NewUsers;
