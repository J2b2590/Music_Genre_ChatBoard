import React, { Component } from 'react';


 class ChatBoard extends Component {
	




	render(){
			const messages = this.props.messages.map((message,i ) => {
			return <div key={i}><span className="author">{message.username}: </span>{message.text}</div>
		})
		return(
			<div>
					{messages}
			</div>
			)
	}
}

export default ChatBoard;