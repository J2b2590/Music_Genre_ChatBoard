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
<<<<<<< HEAD:music_genre_chatboard/src/App.js
        <Login LoginUser={this.LoginUser}/>
=======
       <Login />
       <ChatRoom/>
       <ChatBoard/>
       <Rooms/>
>>>>>>> 52361868b1a9149d6cee3971da6fab38b15f8696:src/App.js
      </div>
    );
  }
}

export default App;
