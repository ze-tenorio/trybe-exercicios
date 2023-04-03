import './App.css';
import React from 'react';

const handleClick = () => {
  console.log('clicou!');
}

const handleClick2 = () => {
  console.log('clicou em nós');
}

const handleClick3 = () => {
  console.log('clicou nos mano');
}

class App extends React.Component {
  render () {
    return (
      <section>
        <button onClick={handleClick}>Clique em mim!</button>
        <button onClick={handleClick2}>Clica em nós!</button>
        <button onClick={handleClick3}>Clica nos mano!</button>
      </section>
    )
  }
}

export default App;
