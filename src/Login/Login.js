import React, { Component } from 'react';
import {socket} from "../index.js";

export class Login extends Component {

	constructor(props){
		super(props)
		this.state ={
			username: ''
		}
	}

	login(e){
		this.setState({username: e.currentTarget.value})

	}

	handleSubmit(e){
		e.preventDefault();
		this.props.userLogin(this.state.username)
	}
	
	render(){
		return(
			<div>
				<h5>User Name</h5>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input 
					type="text" 
					placeholder="username" 
					onChange={this.login.bind(this)} 
					value={this.state.username}/>
					<button>Login</button>
				</form>
			</div>



		);
	}
}
export default Login;