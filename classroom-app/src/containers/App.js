/*
* @Author: duqinzhi
* @Date:   2018-07-16 08:40:03
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 20:58:31
*/
import React,{Component} from 'react';
import Tab from '../components/Tab/index.js';
export default class APP extends Component{
	render(){
		return(
			<div>
				{this.props.children}
				<Tab></Tab>
			</div>
		)
	}
}