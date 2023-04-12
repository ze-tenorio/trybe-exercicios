import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    characters: [],
  }

  fetchCharacter = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json();
    this.setState({
      characters: data.results,
    })
  }

  componentDidMount() {
    this.fetchCharacter();
  }
  
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Rick and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={ name }>
                <h3>{ name }</h3>
                <img src={ image } alt={ name } />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
