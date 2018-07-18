/*
* @Author: duqinzhi
* @Date:   2018-07-16 20:26:14
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 10:21:51
*/

/*actionCreatores   构建action对象的，他是一个function*/
import * as Types from '../action-types.js';
import {getSliders,getLessons} from '../../api/home.js';
//改变当前的课程
export const setCurrentLesson = (val)=>{
	return {    //相当于返回一个action对象
		type:Types.SET_CURRENT_LESSON,
		val:val
	}
};

//获取轮播图
//如果使用reduxThunk actionCreator可以返回一个函数，函数中有dispatch参数
export const getSlider = ()=>(dispatch)=>{
	getSliders().then(sliders=>{  //获取到了返回的sliders(data)数据
		dispatch({
			type:Types.GET_SLIDERS,
			sliders:sliders
		})
	})
}

//获取数据
export const getLesson = ()=>(dispatch,getState)=>{
	//从redux quchu  limit type offset     //参数里面的getState = _store.getState
	let {currentLesson,lesson:{hasMore,limit,offset}} = getState().home
	if(!hasMore)  return;   //没有就不要获取了
	//将isLoading 改为true
	dispatch({type:Types.SET_LOADING_STATUS});
	getLessons(currentLesson,offset,limit).then(lesson=>{
		//此处的lesson代表从后台取出来的数据 data
		dispatch({
			type:Types.GET_LESSONS,
			// ...lesson
			lessons:lesson.lessons,
			hasMore:lesson.hasMore 
		})
	})
}