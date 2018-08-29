import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  render() {
    
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

         /*<Person/>
          <Person/>
          <Person/>*/
         // <button> Switch Name </button>
          <Person name="David" age="28"/>
          <Person name="Daniel" age="35"/>
          
            <Person name="Samson" age="18"> My Hobbies:Racing </Person>
            <p className="Max"> Age:30 </p> 
            </div>
      //1.    return React.createElement('div',null, 'h1','Hi,I am a React App' );

      /// 2.   return React.createElement('div',null, React.createElement('h1',null,'Hi,I am a React App'));
        
      ///3. return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi,I am a React App'));
    )
  }
}

export default App;
