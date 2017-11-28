	import React from 'react';
	
	export default class Form extends React.Component{
		constructor(props){
			super(props);
			this.inputHandleChange=this.inputHandleChange.bind(this);
		}
		inputHandleChange(e){
			 e.preventDefault();
			const formValue = {
				firstName : document.getElementById('fname').value,
				lastName : document.getElementById('lname').value,
				email :document.getElementById('email').value,
				phone:document.getElementById('phone').value
			};
			this.props.handleChange(formValue);
		}
		
		render(){
			return (
				<div>
					<form  onSubmit={this.inputHandleChange}>
						<div>First Name  : {this.props.formDetail.fname}</div>
						<input type="text" name="fname" id="fname"/>
						<div>Last Name   : {this.props.formDetail.lname}</div>
						<input type="text" name="lname" id="lname"/>
						<div>Email		 : {this.props.formDetail.email}</div>
						<input type="text" name="email" id="email"/>
						<div>Phone       : {this.props.formDetail.phone}</div>
						<input  type="text" name="phone" id="phone"/><br/>
						<input type="submit" value="Submit"/>
					</form>
				</div>
			);
		}
	}