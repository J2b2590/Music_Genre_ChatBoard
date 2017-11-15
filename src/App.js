import React, { Component } from 'react';
import Login from './Login/Login.js';
import './App.css';
import {socket} from './index.js';
import ChatRoom from './Chatroom/Chatroom.js';
import {Rooms} from './Rooms/Rooms.js';
const  LOGIN_PAGE = 'login'
const  ROOMS_PAGE = 'rooms'
const  CHATROOM_PAGE = 'chatroom'

class App extends Component {

  constructor(){
    super()

    this.state = {
      users: [], //these users are the users in the same room as the currentuser
      rooms: [], // all of the rooms
      messages: [], //messages in the room the current user is in
      currentUser: {}, //this is the current user 
      page: LOGIN_PAGE //this controls what page the user sees     
    }
  }

  //these are events the server iniaites 
  // the app has to be re rendered when we get the new data
  // calling setState causes react to call render
  componentDidMount(){
    socket.on('users', (users)=>{
      this.setState({users: users})
    })
    socket.on('messages',(messages)=>{
      this.setState({messages: messages})
    })
    socket.on('rooms', (rooms)=>{
      this.setState({rooms: rooms})
    })
  }
//this is the user login 
  userLogin(username){
    socket.emit('addUser', username) //no response right away because of sockets but eventually the server will emit rooms event with rooms data
    this.setState({
      page: ROOMS_PAGE, //after you login you go to rooms page
      currentUser: { username: username }
    });
  }
//user joined a room
  joinRoom(room){
    socket.emit('joinRoom', this.state.currentUser.username, room )
    this.setState({
      currentRoom: room,
      page: CHATROOM_PAGE
    })
  }
//got back button 
  goBack(){
    this.setState({page: ROOMS_PAGE})
  }
// logout button
  logout(){
    this.setState({page: LOGIN_PAGE})
  }


  render() {
    // the app component is deciding which page to render.(more than 2 options. the other was tererny operator only 2 options)
    let page;
    if(this.state.page === LOGIN_PAGE){
      page = <Login userLogin={this.userLogin.bind(this)}/>
    }else if(this.state.page === ROOMS_PAGE){
      page = <Rooms currentUser={this.state.currentUser} joinRoom={this.joinRoom.bind(this)} rooms={this.state.rooms} logOut={this.logout.bind(this)}/>
    }else if(this.state.page === CHATROOM_PAGE){
      page = <ChatRoom room={this.state.currentRoom} users={this.state.users} messages={this.state.messages} currentUser={this.state.currentUser} goBack={this.goBack.bind(this)}/>
    }
    return (
      <div className="App">
         {page}
      </div>
    );
  }
}

export default App;
