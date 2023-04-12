import React, { Component } from 'react';

class UserData extends Component {
  render() {
    const { user } = this.props;
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const age = user.dob.age;
    const imgSrc = user.picture.large;
    return (
      <div>
        <img src={ imgSrc } alt={ fullName } />
        <p>Nome: { fullName }</p>
        <p>Email: { email }</p>
        <p>Idade: { age }</p>
      </div>
    )
  }
}

export default UserData;