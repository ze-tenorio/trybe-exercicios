import React, { Component } from 'react';
import { fetchAPI } from './redux/actions';
import { connect } from 'react-redux';
import CharacterData from './components/characterData';

class App extends Component {
  state = {
    character: '',
  }

  handleInput = (event) => {
    this.setState({
      characterName: event.target.value,
    })
  }

  render() {
    const { dispatch } = this.props;
    const { characterName } = this.state;
    return (
      <div>
        <h1>Game of Thunks</h1>
        <input
          type="text"
          placeholder="Nome do personagem"
          onChange={ this.handleInput }
        />
        <button onClick={ () => dispatch(fetchAPI(characterName)) }>Buscar</button>
        <CharacterData />
      </div>
    )
  }
}

export default connect()(App);
