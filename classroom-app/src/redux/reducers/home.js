/*
* @Author: duqinzhi
* @Date:   2018-07-16 18:19:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-17 17:11:50
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
		offset:0   //偏移量
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
	}
	return state;
}
