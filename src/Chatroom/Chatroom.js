import React, { Component } from 'react';
import {socket} from '../index.js'

class ChatRoom extends Component{
	constructor(props){
		super(props);
	}

	onSubmit(e){
		e.preventDefault()
		const message = {
			username: this.props.currentUser.username,
			text: e.target.querySelector('input').value
		}
		socket.emit("addMessage", message, this.props.room)
	}


	render(){
		const users = this.props.users.map((user, i) => {
			return <li key={i}>{user.username}</li>
		})
		const messages = this.props.messages.map((message,i ) => {
			return <div key={i}><span className="author">{message.username}: </span>{message.text}</div>
		})

		return(
			<div> 
				<h1>{this.props.room.room}</h1>
				<ul>
					{users}
				</ul>
				<div>
					{messages}
				</div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input />
				</form>
			</div>
			)
		
		
	}	
}

export default ChatRoom;