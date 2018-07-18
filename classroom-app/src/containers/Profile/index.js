/*
* @Author: duqinzhi
* @Date:   2018-07-15 21:54:54
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 20:57:52
*/
import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import profile from '../../common/images/profile.png';
export default class Profile extends Component{
	render(){
		return(
			<div>
				<div className="profile">
					<img src={profile} alt='' />
					<Link to={'/login'}>登录</Link>
				</div>
			</div>
		)
	}
}