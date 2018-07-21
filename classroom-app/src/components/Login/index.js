/*
* @Author: duqinzhi
* @Date:   2018-07-18 20:54:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-19 08:43:25
*/
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
					<li><Link to={'/reg'} className='reg-btn'>注册</Link></li>
					<li><Link to={'/login'} className='login-btn'>登录</Link></li>
				</ul>
			</div>
		)
	}
}