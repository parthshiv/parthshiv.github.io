import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      //console.log(persons);
      this.setState({ persons });
    });
  }

  formatName = name => {
    return <span className="namestyle">{name}!</span>;
  };

  formatEmail = email => {
    return <a href={"mailto: " + email}>{email}</a>;
  };

  render() {
    return (
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {this.state.persons.map(person => (
            <tr key={person.id}>
              <td>
                <span> {this.formatName(person.name)}</span>
              </td>
              <td>
                <span> {this.formatEmail(person.email)}</span>
              </td>
              <td>
                <span> {person.company.name}</span>
              </td>
              <td>
                <span> {person.phone}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Users;
