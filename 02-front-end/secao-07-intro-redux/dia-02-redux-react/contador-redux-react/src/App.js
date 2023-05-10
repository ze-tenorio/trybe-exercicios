// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionClick, actionCounter } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, clickState, dispatch } = this.props;

    const dispatchAll = (int = 1) => {
      dispatch(actionClick());
      dispatch(actionCounter(int));
    }
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={ () => dispatchAll() }>Incrementa 1</button>
        <button onClick={ () => dispatchAll(5) }>Incrementa 5</button>
        <h2>{ `Números de cliques: ${ clickState }` }</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clickState: state.counterReducer.clicks,
});

export default connect(mapStateToProps)(App);
