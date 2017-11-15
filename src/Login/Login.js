import React, { Component } from 'react';
import {socket} from "../index.js";

export class Login extends Component {

	constructor(props){
		super(props)
		this.state ={
			username: ''
		}
	}

	Login = (e) =>{
		const state = this.state
		state.username = e.currentTarget.value
		this.setState(state)

	}

	handleSubmit = (e) =>{
		console.log(e, 'handleSubmit')
		e.preventDefault();

		socket.emit('addUser', this.state.username)
		this.props.UserLogin(this.state.username)
	}
	
	render(){
		return(
			<div>
				<h5>User Name</h5>
				<form onSubmit={this.handleSubmit}>

					<input type="text" placeholder="username" onChange={this.Login} value={this.state.username}/>
					<button>Login</button>

				</form>
			</div>



		);
	}
}
export default Login;