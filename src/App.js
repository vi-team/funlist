import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FunList from './components/FunList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FunList</h1>
        </header>
        <FunList />
      </div>
    );
  }
}

export default App;
