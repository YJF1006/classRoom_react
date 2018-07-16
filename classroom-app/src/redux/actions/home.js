/*
* @Author: duqinzhi
* @Date:   2018-07-16 20:26:14
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 20:44:37
*/

/*actionCreatores   构建action对象的，他是一个function*/
import * as Types from '../action-types.js';

//改变当前的课程
export const setCurrentLesson = (val)=>{
	return {    //相当于返回一个action对象
		type:Types.SET_CURRENT_LESSON,
		val:val
	}
};