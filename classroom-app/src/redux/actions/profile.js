/*
* @Author: duqinzhi
* @Date:   2018-07-19 10:53:13
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-19 15:12:45
*/
import {regs} from '../../api/profile.js';
import * as Types from '../action-types.js'
export const reg = (userInfo)=>(dispatch)=>{
	regs(userInfo).then(data=>{
		if(data.err){
			dispatch({
				type:Types.SET_ERROR,
				error:data.err
			})
		}else{
			dispatch({
				type:Types.SET_USER_INFO,
				userInfo:data, 
			})
		}
	})
};