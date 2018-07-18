/*Home组件的index*/
import React,{Component} from 'react';
import {connect} from 'react-redux';  //引入connect函数
import {Link} from 'react-router-dom';

import Swiper from '../../components/Swiper/index.js';   //引入系统下载的轮播图组件
import ScrollList from '../../components/ScrollList/index.js';
import HomeHeader from '../../components/HomeHeader/index.js';
import * as action from '../../redux/actions/home';   //引入home的action   {setCurrentLesson:function}
import './index.css';
//组件的UI
 class Home extends Component{
	chooseLesson = (type)=>{
		//console.log(type);
		//只改变的类型，没有重置数据
		this.props.setCurrentLesson(type);  //调用映射后得属性，里面有state，action两个映射的,setCurrentLesson为映射后的action里面的
		this.props.getLesson();   //重新获取当前类型数据    类型一改变，要重新获取课程数据，因为不同类型的对应不同的数据
	}
	componentDidMount(){
		//判断redux中是否存在了数据，如果有则不去获取数据
		if(this.props.home.lesson.lessonList.length === 0){  //没有存数据的时候才去获取数据
			this.props.getSlider();
			this.props.getLesson();
		}
		//让组件强制更新
		if(this.props.home.lesson.lessonList.length > 0){  //当存有数据的时候，强制让父组件强制刷新 ，这样子组件也就可以更新了
			//将记录好的滚动条状态取出来赋给content元素   在组件将要销毁的时候记录
			let value = JSON.parse(sessionStorage.getItem('homeLocation'));
			this.refs.scroll.scrollTop = value;
			this.forceUpdate();    //强制更新
			
		}
	}
	componentWillUnmount(){  //组件将要销毁的时候，记住滚动条的位置
		let value = JSON.stringify(this.refs.scroll.scrollTop);
		sessionStorage.setItem('homeLocation',value);
	}
	handleLoadMore = ()=>{
		this.props.getLesson();
	}
	render(){
		let {hasMore,isLoading,lessonList} = this.props.home.lesson;
		return(
			<div>
				<HomeHeader chooseLesson={this.chooseLesson}></HomeHeader>
				<div className='content' ref='scroll'>  
					<ScrollList element={this.refs.scroll}
								isLoading={isLoading}
								hasMore={hasMore}
								loadMore = {this.handleLoadMore}
					>
						<Swiper data={this.props.home.sliders}></Swiper>
						<div className='lesson-list'>
							<h3><i className='iconfont icon-kecheng-copy'></i>全部课程</h3>
						{/*课程列表,*/}
							{
								lessonList.length?
									lessonList.map((item,index)=>(
										<Link to={{pathname:'/detail',state:item}} key={index}>  {/*跳转详情页，并且带上数据item*/}
											<div className='lesson-list-item'>
												<img src={item.url} alt=""/>
												<p>{item.title}</p>
												<span>{item.price}</span>
											</div>
										</Link>
									))
								: 	
									<div>正在加载</div>
							}
						</div>

						<button onClick = {this.loadMore}>获取更多</button>	
					</ScrollList>
				</div>	
			</div>
		)
	}
}
//将UI组件生成含有store的组件，把redux里面的状态映射成了props属性
export default connect(state=>({...state}),action)(Home);  //将state action变成了props属性


/*connect的参数 
	mapStateToProps->将redux中的数据变成属性      state=>{...state}
	mapDispatchToProps -> 可以直接传一个actionCreator的对象    action
	解构了state : 1.this.props.setCurrentLesson  2.this.props.home.
*/ 
/*备注
让HomeHeader选择的值在home中获得到 相当于在父级中拿到自己的值子传给父
	方法：将父级函数传给子级,子级发生变化时候，把变化作为参数的传给父级给的函数
*/	3