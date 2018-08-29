import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const message= "Welcome messge by ReactJS";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Learning React JS</h1>
        </header>
        <p className="App-intro">
         
         {message}
        </p>
        <Person name="David"  age="20"/>
        <Person  name="Daniel" age="30"/>
        <Person name="Samson" age="25"> My hobby is Racing </Person>

      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'Welcome by REACTJS'));
  }
}
/*class Welcome extends App{
  render(){
    return(
     <p> {message} Welcome to learn React JS </p>
      )
  }
}*/
export default App;
