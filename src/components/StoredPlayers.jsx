import React, { Component } from "react";

class Players extends Component {
  state = {
    users: []
  };
  componentWillMount() {
    fetch("http://localhost:4000/api/users", { method: "GET" })
      .then(response => response.json())
      .then(res_users => {
        this.setState({ users: res_users["users"] });
      })
      .catch(err => {
        return <div />;
      });
  }
  render() {
    let { users } = this.state;
    return (
      <ul>
        {users.map(user => (
          <li key={user.user}>
            <a href="#">
              <p>{user.user}</p>
            </a>
            <p>Win:{user.stats.win}</p>
            <p>Lose:{user.stats.lose}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Players;
