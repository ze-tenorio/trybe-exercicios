import React, { Component } from 'react'

export class PersonalInfo extends Component {
  render() {
    const { nameValue, emailValue, handleChange } = this.props;
    const emailError = emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const nameError = nameValue.length > 0;
    return (
      <fieldset>
          <label>Nome:
            <input 
            name='name' 
            type='text' 
            value={nameValue} 
            onChange={handleChange}
            className={nameError ? 'input-field-valid' : 'input-field'}
            >
            </input>
          </label>
          
          <label>E-mail:
            <input 
              name='email' 
              type='email' 
              value={emailValue} 
              onChange={handleChange}
              className={emailError ? 'input-field-valid' : 'input-field'}
            >
            </input>
          </label>
        </fieldset>
    )
  }
}

export default PersonalInfo