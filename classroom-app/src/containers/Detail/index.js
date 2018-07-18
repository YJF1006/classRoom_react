/*
* @Author: duqinzhi
* @Date:   2018-07-18 19:38:24
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 20:09:35
*/
import React,{Component} from 'react';
import './index.css';
export default class Detail extends Component{
	componentWillMount(){
		if(!this.props.location.state){
			this.props.history.push('/');   //要是直接访问的detail ，那么重定向
		}
	}
	render(){
		let {url,price,title} = this.props.location.state || {};   //如果没有属性，对象默认undefined 解构会报错
		return (
			<div>
				<img src={url} alt=""/>
				<p>{title}</p>
				<p>{price}</p>
			</div>
		)
			
	}
}