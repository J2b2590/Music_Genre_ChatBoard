import React, { Component } from 'react';
import Login from './Login/Login.js';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {

      logged: false,
      currentUser: '',
      username: ''
    }
  }


  render() {
    return (
      <div className="App">
       <Login />
      </div>
    );
  }
}

export default App;
