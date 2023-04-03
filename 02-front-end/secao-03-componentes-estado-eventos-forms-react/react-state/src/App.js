import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    btnOne: 0,
    btnTwo: 0,
    btnThree: 0
  }

  getButtonColor = (num) => num % 2 === 0 ? 'green' : 'white';
  
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
    }), () => {
      console.log(this.getButtonColor(this.state.btnThree))
    })
  }
  
  render () {
    const { btnOne, btnTwo, btnThree } = this.state;
    return (
      <section>
        <button 
          onClick={this.handleClick}
          style={ {backgroundColor: this.getButtonColor(btnOne)} }
        >
          {this.state.btnOne}
        </button>
        <button 
          onClick={this.handleClick2}
          style={{backgroundColor: this.getButtonColor(btnTwo)}} 
        >
          {this.state.btnTwo}
        </button>
        <button 
          onClick={this.handleClick3}
          style={{backgroundColor: this.getButtonColor(btnThree)}}
        >
          {this.state.btnThree}
        </button>
      </section>
    )
  }
}

export default App;
