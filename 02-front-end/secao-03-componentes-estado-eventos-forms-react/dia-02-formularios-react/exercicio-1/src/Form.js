import React, { Component } from 'react'

export class Form extends Component {
  state = {
    inputedName: ''
  }

  handleName = (event) => {
    this.setState({
      inputedName: event.target.value
    })
  }
  
  render() {
    return (
      <form>
        <label>Comida Preferida:
          <select></select>
        </label>

        <label>Nome:
          <input type='text' value={this.state.inputedName} onChange={this.handleName}></input>
        </label>
        
        <label>E-mail:
          <input type='email'></input>
        </label>

        <label>Opinião:
          <textarea></textarea>
        </label>
      </form>
    )
  }
}

export default Form