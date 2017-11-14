import React, { Component } from 'react';

export class ChatBoard extends Component {
	constructor(props){
		super(props);
		this.state = {
			messageValue: ''

		}
	}


	render(){
		return(
		<div>"I am the Chat Board where you type the messages"</div>
			)
	}
}

