import React, { Component } from 'react';
import {socket} from '../index.js'

class ChatRoom extends Component{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		socket.emit
	}

	render(){
		const users = this.props.users.map((user, i) => {
			return <li key={i}>{user.username}</li>
		})
		const messages = this.props.messages.map((message,i ) => {
			return <div key={i}><span className="author">{message.username}</span>{message.text}</div>
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
			</div>
			)
		
		
	}	
}

export default ChatRoom;