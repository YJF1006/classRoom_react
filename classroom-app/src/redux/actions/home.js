/*
* @Author: duqinzhi
* @Date:   2018-07-16 20:26:14
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-17 11:42:30
*/

/*actionCreatores   构建action对象的，他是一个function*/
import * as Types from '../action-types.js';
import {getSliders} from '../../api/home.js';
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