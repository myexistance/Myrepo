import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const welcome="Welcome to React"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> {welcome}</h1>
        </header>
        <p className="App-intro">
          <Welcome/>
        </p>
      </div>
    );
  }
}
class Welcome extends Component{
  render(){
    return (
      <p> {welcome} </p>
      );
  }
}
export default App;
