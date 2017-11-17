import React, { Component } from 'react';
import {socket} from '../index.js';
import ChatBoard from '../ChatBoard/ChatBoard.js';
import './Chatroom.css'


class ChatRoom extends Component{
	constructor(props){
		super(props);
		console.log(props, 'props')
		this.state = {
			message: '',
		}
	}


	onSubmit(e){
		e.preventDefault()
		const message = {
			username: this.props.currentUser.username,
			text: this.state.message
		}
		this.setState({message: ''})
		socket.emit("addMessage", message, this.props.room)
	}
	message(e){
		this.setState({message: e.target.value})
		console.log(e.target,'this is message')
	}


	render(){
		const users = this.props.users.map((user, i) => {
			if (user.currentRoom === this.props.room.room){
				return <li key={i}>{user.username}</li>
			}	
		})


		return(
			<div className='row'> 
				<h1 className='roomName'>{this.props.room.room}</h1>
					<div className="col s6 users scrollbar" id="style-default" >
						<h5>Users in this Chat Room</h5>
						<ul>
							{users}
						</ul>
					</div>
				<div className="col s6 messages scrollbar">
					<ChatBoard messages={this.props.room.messages}/>
				</div>
				<form className="chatroom-input" onSubmit={this.onSubmit.bind(this)}>
					<input placeholder="message" value={this.state.message} onChange={this.message.bind(this)} />
				</form>
				<button className="waves-effect waves-light btn" onClick={this.props.goBack}>Back</button>
				
			</div>
			)
		
		
	}	
}

export default ChatRoom;