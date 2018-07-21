/*
* @Author: duqinzhi
* @Date:   2018-07-19 09:03:59
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-19 15:39:09
*/
import * as Types from '../action-types.js';
let initState = {
	userInfo:{   //用户的信息
	
	},
	err:''   //登录注册的错误信息
};

export default function(state=initState,action){
	switch(action.type){
		case Types.SET_ERROR:
			return {
				...state,
				err:action.error
			}
		case Types.SET_USER_INFO:
			return {
				...state,
				userInfo:action.userInfo,
				err:''
			}
	}
	return state;
}


