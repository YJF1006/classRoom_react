/*
* @Author: duqinzhi
* @Date:   2018-07-18 21:07:01
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 21:39:26
*/
import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.css';
class MHeader extends Component{
	handleBack = ()=>{
			this.props.history.goBack();
		}
	render(){
		return(
			<div className='m-header'>
				<i className='iconfont icon-fanhui' onClick={this.handleBack}></i>
				{this.props.title}
			</div>
		)
	}
}
//在当前组件上增加history属性
export default withRouter(MHeader)