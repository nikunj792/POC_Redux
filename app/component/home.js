	import React from 'react';
	import { connect } from 'react-redux';
	import Form from 'Form';
		
	 class Home extends React.Component{
		constructor(props){
			super(props);
		}
	render(){
			return (
				<div>
					<Form formDetail = {this.props.user} handleChange ={(name)=>this.props.handleChangeUser(name)}/>
				</div>
			);
		}
	}
	
	const mapStateToProps = (state)=>{
		return{
			user:state
		};
	};
	
	const mapDispatchToProps = (dispatch)=>{
		return{
			handleChangeUser:(name)=>{
				dispatch({
					type:"SET_USERDETAILS",
					payload:name
				});
			}
		};
	};
	
	export default connect(mapStateToProps, mapDispatchToProps)(Home);