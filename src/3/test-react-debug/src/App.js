import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import json from "./testJsonc.json";

class App extends Component {
  

  render() {
    console.log('');
    console.log('', );
    console.log('', );
    console.log(':', );
    
    console.log(json);
    console.log(logo);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
