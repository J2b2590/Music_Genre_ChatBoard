import React, { Component } from 'react';
import {socket} from '../index.js'
import ChatBoard from '../ChatBoard/ChatBoard.js'

class ChatRoom extends Component{
	constructor(props){
		super(props);

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
		console.log(e.target,'this is message e')
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
<<<<<<< HEAD
					<input  onChange={this.message.bind(this)} />
=======
					<input value={this.state.message} onChange={this.message.bind(this)} />
>>>>>>> 0bc030b4f1cf059e72020dae0b96a273737c268b
				</form>
				<button onClick={this.props.goBack}>Back</button>
			</div>
			)
		
		
	}	
}

export default ChatRoom;