import React, { Component } from 'react';
import {socket} from '../index.js'

export class Rooms extends Component{

	constructor(props){
		super(props);
			this.state = {

				rooms: []

		}
	}

	componentDidMount(){
		const state = this.state;
		socket.on('rooms', (rooms)=>{
			console.log(rooms,'this is rooms')
			state.rooms = rooms;
			this.setState(state)
		})
	}
	// joinRoom =(e)=>{
	// 	socket.emit('join room', e.target.innerText)
	// }

	

	render(){


		const rooms = this.state.rooms.map((room,i)=>{

			return <li key={i}> {room.room} </li>
		})
		//onClick={this.joinRoom}-----this goes in <li key={i} onClick={this.joinRoom}>

		//







		return(
		<div>
			
			<h1>Welcome, choose a music genre chatroom</h1>

			<ul>
				{rooms}
			</ul>

		</div>
			
			)
	}
}

