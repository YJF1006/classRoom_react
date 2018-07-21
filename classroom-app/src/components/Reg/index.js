/*
* @Author: duqinzhi
* @Date:   2018-07-18 20:54:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-19 14:27:37
*/
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import MHeader from '../MHeader/index.js';
import profile from '../../common/images/profile.png';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/profile.js';
import './index.css';

class Reg extends Component{
	handleReg =()=>{
		//console.log(this.username.value,this.password.value);
		this.props.reg({
			username:this.username.value,
			password:this.password.value
		})
	}
	render(){
		return(
			<div className='reg'>
				<MHeader title='注册'></MHeader>
				<img src={profile} alt=""/>
				<ul>
					<li><input type="text" placeholder='请输入用户名' ref={element=>{
						this.username = element; 
					}}/></li>
					<li><input type="text" placeholder='请输入密码' ref ={element=>{
						this.pathword = element;
					}}/></li>
					<li><a href="" className='reg-btn' onClick = {this.handleReg}>注册</a></li>
					{/*<li>{this.props.user.err}</li>*/}
				</ul>
			</div>
		)
	}
}
export default connect(state=>({...state}),action)(Reg)