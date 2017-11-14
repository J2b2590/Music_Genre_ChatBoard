import React, { Component } from 'react';
import {socket} from '../index.js'

class ChatRoom extends Component{

	constructor(props){
		super(props);
		this.state = {

			usernames: [],
			message: [],
			currentRoom: ''
		}
	}

	






	render(){
		return(

			<p>This is the room the holds usernames, messages, and where the chatboard is</p>

			)
		
		
	}	
}

export default ChatRoom;