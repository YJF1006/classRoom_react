/*
* @Author: duqinzhi
* @Date:   2018-07-16 08:56:44
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 11:34:13
*/
import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';   //NavLink 和Link一样，只不过NavLink可以加激活样式  exact 精确匹配
import './index.css';
export default class Tab extends Component{
	render(){
		return(
			<nav className='footer'>
				<NavLink to={'/'} exact activeClassName ='selected'>
					<i className='iconfont icon-xingqiu'></i>
					<span>首页</span>
				</NavLink>
				<NavLink to={'/lesson'} activeClassName ='selected'>
					<i className='iconfont icon-react'></i>
					<span>我的课程</span>
				</NavLink>
				<NavLink to={'/profile'} activeClassName ='selected'>
					<i className='iconfont icon-xiaolian'></i>
					<span>个人中心</span>
				</NavLink>
			</nav>
		)
	}
}