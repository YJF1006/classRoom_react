/*
* @Author: duqinzhi
* @Date:   2018-07-16 18:19:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 21:17:42
*/

/**home里面放的是首页所有的信息*/
import * as Types from '../action-types.js';
export default function(state={currentLesson:0},action){
	//传进来的action 有两个属性 1.type 2.val
	switch(action.type){
		case Types.SET_CURRENT_LESSON:
			return {...state,currentLesson:action.val}  //用新的盖掉老的，而且原来的不相关的不变
	}
	return state;
}
