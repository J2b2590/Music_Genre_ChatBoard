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
LoginUser = (username) =>{
  const state = this.state;
  state.logged = !state.logged;
  state.currentUser = username;

  this.setState(state);
}









  render() {
    return (
      <div className="App">
       <Login LoginUser={this.LoginUser}/>
      </div>
    );
  }
}

export default App;
