/*
* @Author: duqinzhi
* @Date:   2018-07-16 18:19:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 10:26:59
*/

/**home里面放的是首页所有的信息*/
import * as Types from '../action-types.js';
let initState = {
	currentLesson:0,  //当前所选的课程
	sliders:[],  //轮播图的数据
	lesson:{   //滚动到底部刷新
		lessonList:[],  
		hasMore:true,//是否有更多
		limit:3,   //每次获取几个
		offset:0,   //偏移量
		isLoading:false   //状态表示是否正在加载
	}
}
export default function(state=initState,action){
	//传进来的action 有两个属性 1.type 2.val
	switch(action.type){
		case Types.SET_CURRENT_LESSON:
		//把state展开，用新的currentLesson盖掉老的，而且原来的不相关的不变
			return {...state,currentLesson:action.val}
		case Types.GET_SLIDERS:
			return {...state,sliders:action.sliders}
		case Types.GET_LESSONS:
			return {
				...state,   //将所有的state放进去了
				lesson:{     //把lesson里面的也全部放进去了,要修改的用覆盖就行
					...state.lesson,
					hasMore:action.hasMore,
					lessonList:[...state.lesson.lessonList,...action.lessons],    //将原来的lesssonList与新接收的合并在一起
					offset:state.lesson.offset + action.lessons.length,
					isLoading:false
				}
			}
		case Types.SET_LOADING_STATUS:
			return {
				...state,
				lesson:{
					...state.lesson,
					isLoading:true
				}
			}
	}
	return state;
}
