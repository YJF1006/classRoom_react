/*
* @Author: duqinzhi
* @Date:   2018-07-16 14:33:05
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 20:24:50
*/
import React,{Component} from 'react';
import './index.css';
import logo from '../../common/images/logo.jpg';
import {TransitionGroup, CSSTransition} from 'react-transition-group'; //CSSTransition 要依赖于TransitionGroup，所以要把TransitionGroup解构出来
export default class HomeHeader extends Component{
	constructor(){
		super();
		this.state = {isShow:false};  //是否显示ul
	}
	//显示事件的点击
	handleShow = ()=>{
		this.setState({
			isShow:!this.state.isShow   //原来的取反
		})
	}
	//选择课程事件的点击
	handlechoose =(event)=>{
		let type = event.target.getAttribute('type');   //拿到type属性值
		this.props.chooseLesson(type);   //把拿到的type传给父级的函数
		this.handleShow();   //点击(把值传出去)之后，列表隐藏
	}
	render(){
		return(
			<div className='home-header'>
				<div className='header-menu'>
					<img src={logo} alt=""/>
					<div onClick={this.handleShow}>
						{
							this.state.isShow?
								<i className='iconfont icon-guanbi'></i>
							:
								<i className='iconfont icon-uilist'></i>
						}	
					</div>
				</div>
				<TransitionGroup>
					{  //三元表达式,根据isShow判断是否显示
						this.state.isShow?
							<CSSTransition timeout={1000} classNames='fadeIn'>
								<ul className='menu-list' onClick={this.handlechoose}>
									<li type='1'>Node课程培训</li>
									<li type='2'>Html</li>
									<li type='3'>视频课程</li>
									<li type='4'>文档课件</li>
								</ul>
							</CSSTransition>	
						: 
							null
					}
				</TransitionGroup>				
			</div>
		)
	}
}

/**
 * 动画的效果
 * 1.引入CSSTransition TransitionGroup
 * 		import {CSSTransition,TransitionGroup} from 'react-transition-group';
 * 2.最外层包裹 TransitionGroup
 * 3.用CSSTransition包裹移除元素，因为CSSTransition包裹null会报错
 * 4.CSSTransition传递的参数看百度文档 一般需要两个属性
 * 		时间 timeout={{enter:500,exit:300}}   /*进入和移除的时间  两个时间一样的时候写一个timeout={1000}
 * 		动画的名字 classNames=' '    重点重点重点重点  是classNames  有s
 *
 * 
 * 5.在css样式里面写（以动画的名字叫fadeIn为例）
		.fadeIn-enter{  //进入之前
			opacity: 0;
		}
		.fadeIn-enter-active{  //进去之后
			opacity:1; 
			transition: all 1s;
		}
		.fadeIn-exit{  //离开之前  这个动画看不到 一般不写
			
		}
		.fadeIn.exit-active{  //离开之后
			opacity: 0;
			transition: all 1s;
		}
 * 
 */