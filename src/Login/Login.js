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
			<div className="loginpage">
				<div className="loginpage-overlay">
				<h1 className="app-title">Music Chat Room</h1>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className="textbox">
							<input className="login-input"
							type="text" 
							placeholder="username" 
							onChange={this.login.bind(this)} 
							value={this.state.username}/>
							</div>
						<button className="waves-effect waves-light btn">Login</button>
					</form>
				</div>
			</div>



		);
	}
}
export default Login;