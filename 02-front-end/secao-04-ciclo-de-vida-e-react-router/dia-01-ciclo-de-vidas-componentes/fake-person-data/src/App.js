import './App.css';
import React from 'react';
import UserData from './components/UserData';

class App extends React.Component {
  state = {
    user: [],
    loading: true,
  }

  fetchUser = async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const results = data.results[0];
    this.setState({
      user: results,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const age = 50
    console.log(nextState.user.dob.age);
    if (nextState.user.dob.age < age) return true;
  }
  
  render() {
    const { user, loading } = this.state;
    const loadingElement = <div>Carregando...</div>;
    return (
      <div className="App">
        <h1>Fake Person Data</h1>
        <div>
          { loading ? loadingElement : <UserData user={ user } /> }
        </div>
      </div>
    );
  }
}

export default App;
