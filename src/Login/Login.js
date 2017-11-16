import React, { Component } from 'react';
import {socket} from "../index.js";
import './Login.css';

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
//
	handleSubmit(e){
		e.preventDefault();
		this.props.userLogin(this.state.username)
	}
	
	render(){
		return(
			<div class="loginpage">
				<div class="loginpage-overlay">
				<h1 class="app-title">Music Chat Room</h1>
				<h5 class="app-page">User Name</h5>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div class="textbox">
							<input class="login-input"
							type="text" 
							placeholder="username" 
							onChange={this.login.bind(this)} 
							value={this.state.username}/>
							</div>
						<button>Login</button>
					</form>
				</div>
			</div>



		);
	}
}
export default Login;