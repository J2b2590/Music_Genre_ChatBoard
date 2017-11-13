import React, { Component } from 'react';

export class Login extends Component {

	Login = (e) => {
		 console.log(e.key, e.keyCode, e.charCode)
    if(e.key === 'Enter'){
      // send the e.target.value to the are App component in order to change the state
      this.props.login(e.target.value)
           console.log(e.target.value)
	}
}

	
	render(){
		return(
			<div>
				<h5>User Name</h5>
				<input type="text" onKey={this.Login}/>
			</div>



		);
	}
}
export default Login;