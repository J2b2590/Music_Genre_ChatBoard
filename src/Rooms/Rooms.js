import React, { Component } from 'react';
import {socket} from '../index.js'
import './Rooms.css'

export class Rooms extends Component{
	

	render(){
		const rooms = this.props.rooms.map((room,i)=>{
			return <div className="col s2 room-container"
				key={i}
				id={room.room}
				onClick={()=>{this.props.joinRoom(room)}}><li className="text"><span>{room.room}</span></li>
			</div>
		})

		return(
			<div >
				<h1 class="roomTitle">Welcome, choose a music genre chatroom</h1>
				<ul>
					<li>{rooms}</li>
				</ul>
				<button class="waves-effect waves-light btn" onClick={this.props.logOut}>Logout</button>
			</div>
		)
	}
}

