import React, { Component } from 'react';
import {socket} from '../index.js'
import './Rooms.css'

export class Rooms extends Component{
	

	render(){
		const rooms = this.props.rooms.map((room,i)=>{
			return <button
				key={i}
				onClick={()=>{this.props.joinRoom(room)}}>{room.room}
			</button>
		})

		return(
			<div>
				<h1>Welcome, choose a music genre chatroom</h1>
				<ul>
					{rooms}
				</ul>
				<button onClick={this.props.logOut}>Logout</button>
			</div>
		)
	}
}

