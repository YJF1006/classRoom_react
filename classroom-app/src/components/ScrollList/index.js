/*
* @Author: duqinzhi
* @Date:   2018-07-18 15:01:39
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 15:46:04
*/
import React,{Component} from 'react';
/*可以接收几个参数
	element：表示滚动元素（传来的是content）
	isLoading：是否正在加载
	hasMore：是否更多
	loadMore : 获取更多的方法
*/

export default class ScrollList extends Component{
	constructor(){
		super();
		this.state={flag:false}
	}
	render(){
		//等待接收的属性有element，再绑定事件
		componentWillReceiveProps(nextProps){  //父组件数据更新，会触发子组件的数据更新
			if(nextProps.element && !this.state.flag){  //如果nextProps.element有值，并且没有绑定过，那么才绑定值
				//节流 
				nextProps.element.addEventListener('scroll',()=>{
					clearTimeout(this.time);
					setTimeout(this.time=>{
						//判断scrollTop(卷取得高度)  offsetHeight(屏幕的高度)  scrollHeight(总高)
						let {scrollTop,offsetHeight,scrollHeight} = nextProps.element;
						if(scrollTop + offsetHeight +20 >scrollHeight && this.props.hasMore && !this.props.isLoading){ 
						 //距离底部还有20像素,并且还有更多，没有正在加载的时候才 开始加载
							this.props.loadMore();   //加载更多
						}
					},50)
				});
				this.setState({flag:true});
			}
		} 
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}