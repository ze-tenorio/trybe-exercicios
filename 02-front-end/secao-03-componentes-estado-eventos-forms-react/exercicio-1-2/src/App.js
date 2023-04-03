import './App.css';
import React from 'react';

class App extends React.Component {
  handleClick = () => {
    console.log(this);
    console.log('clicou!');
  }

  handleClick2 = () => {
    console.log(this);
    console.log('clicou em nós');
  }

  handleClick3 = () => {
    console.log('clicou nos mano');
  }
  
  render () {
    return (
      <section>
        <button onClick={this.handleClick}>Clique em mim!</button>
        <button onClick={this.handleClick2}>Clica em nós!</button>
        <button onClick={this.handleClick3}>Clica nos mano!</button>
      </section>
    )
  }
}

export default App;
