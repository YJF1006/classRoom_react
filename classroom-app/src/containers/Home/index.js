/*Home组件的index*/
import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index.js';
import {connect} from 'react-redux';  //引入connect函数
import * as action from '../../redux/actions/home';   //引入home的action
//{setCurrentLesson:function}
import Swiper from '../../components/Swiper/index.js';   //引入系统下载的轮播图组件
import './index.css';

//组件的UI
 class Home extends Component{
	chooseLesson = (type)=>{
		//console.log(type);
		this.props.setCurrentLesson(type);  //调用映射后得属性，里面有state，action两个映射的,setCurrentLesson为映射后的action里面的
	}
	componentWillMount(){
		this.props.getSlider();
		this.props.getLesson()
	}
	render(){
		let {hasMore,isLoading,lessonList} = this.props.home.lesson;
		return(
			<div>
				<HomeHeader chooseLesson={this.chooseLesson}></HomeHeader>
				<div className='content'>  
					<Swiper data={this.props.home.sliders}></Swiper>
					<div className='lesson-list'>
						<h3><i className='iconfont icon-kecheng-copy'></i>全部课程</h3>
					{/*课程列表*/}
						{
							lessonList.length?
								lessonList.map((item,index)=>(
									<div key={index} className='lesson-list-item'>
										<img src={item.url} alt=""/>
										<p>{item.title}</p>
										<span>{item.price}</span>
									</div>
								))
							: 	
								<div>正在加载</div>
						}
					</div>
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