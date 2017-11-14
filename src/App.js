import React, { Component } from 'react';
import Login from './Login/Login.js';
import './App.css';
import {socket} from './index.js';
import ChatRoom from './Chatroom/Chatroom.js';
import ChatBoard from './ChatBoard/ChatBoard.js';
import Rooms from './Rooms/Rooms.js';



console.log(socket)

class App extends Component {

  constructor(){
    super()

    this.state = {

      logged: false,
      currentUser: '',
      username: ''
    }
  }

  componentDidMount(){
    socket.on('message', (data)=>{
      console.log(data)
    })
  }


  render() {
    return (
      <div className="App">

          <Login LoginUser={this.LoginUser}/>

         
         <ChatRoom/>
         <ChatBoard/>
         <Rooms/>

      </div>
    );
  }
}

export default App;
