import React, { Component } from 'react';
import {socket} from '../index.js'
import ChatBoard from '../ChatBoard/ChatBoard.js'

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


		return(
			<div> 
				<h1>{this.props.room.room}</h1>
				<ul>
					{users}
				</ul>
				<ChatBoard messages={this.props.messages}/>
			
				<form onSubmit={this.onSubmit.bind(this)}>
					<input />
				</form>
			</div>
			)
		
		
	}	
}

export default ChatRoom;