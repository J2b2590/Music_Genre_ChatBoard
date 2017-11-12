import React, { Component } from 'react';
import Login from './Login/Login.js';
import './App.css';
import ChatRoom from './Chatroom/Chatroom.js'
import ChatBoard from './ChatBoard/ChatBoard.js'
import Rooms from './Rooms/Rooms.js'


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
       <ChatRoom/>
       <ChatBoard/>
       <Rooms/>
      </div>
    );
  }
}

export default App;
