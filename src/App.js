import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FunList</h1>
        </header>
        <p className="App-intro">To get started, we need collabration.</p>
        <Button variant="contained" color="primary">
          Got it
        </Button>
      </div>
    );
  }
}

export default App;
