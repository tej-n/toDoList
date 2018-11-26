import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(json => console.log({ json }))
  }

  render() {
    return (
      <div className="App">
        TO DO LIST
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <ToDoList></ToDoList>
        </div>
      </div>
    );
  }
}

export default App;
