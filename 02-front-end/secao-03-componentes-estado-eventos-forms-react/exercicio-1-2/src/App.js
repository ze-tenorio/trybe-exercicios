import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    btnOne: 0,
    btnTwo: 0,
    btnThree: 0
  }
  
  handleClick = () => {
    this.setState((prev) => ({
      btnOne: prev.btnOne + 1
    }))
  }

  handleClick2 = () => {
    this.setState((prev) => ({
      btnTwo: prev.btnTwo + 1
    }))
  }

  handleClick3 = () => {
    this.setState((prev) => ({
      btnThree: prev.btnThree - 1
    }))
  }
  
  render () {
    return (
      <section>
        <button onClick={this.handleClick}>{this.state.btnOne}</button>
        <button onClick={this.handleClick2}>{this.state.btnTwo}</button>
        <button onClick={this.handleClick3}>{this.state.btnThree}</button>
      </section>
    )
  }
}

export default App;
