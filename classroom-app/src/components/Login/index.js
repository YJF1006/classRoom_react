/*
* @Author: duqinzhi
* @Date:   2018-07-18 20:54:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 22:05:19
*/
import React,{Component} from 'react';
import MHeader from '../MHeader/index.js';
import profile from '../../common/images/profile.png'
import './index.css';

export default class Login extends Component{
	render(){
		return(
			<div className='login'>
				<MHeader title='登录'></MHeader>
				<img src={profile} alt=""/>
				<ul>
					<li><input type="text" placeholder='请输入用户名'/></li>
					<li><input type="text" placeholder='请输入密码'/></li>
					<li><a href="" className='reg-btn'>注册</a></li>
					<li><a href="" className='login-btn'>登录</a></li>
				</ul>
			</div>
		)
	}
}