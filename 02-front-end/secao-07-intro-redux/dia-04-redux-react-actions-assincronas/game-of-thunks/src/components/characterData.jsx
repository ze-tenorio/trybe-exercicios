import React, { Component } from 'react';
import { connect } from 'react-redux';

class characterData extends Component {
  render() {
    const { isLoading, character } = this.props;
    if (isLoading) { return 'Carregando...' }
    if (character) {
      return (
        <div>
          <img src={character.url} alt="GoT Character" />
          <p>{character.name}</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  character: state.data,
})

export default connect(mapStateToProps)(characterData);