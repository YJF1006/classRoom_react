/*
* @Author: duqinzhi
* @Date:   2018-07-16 19:20:37
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-19 09:18:36
*/
import home from './home.js';
import profile from './profile.js';
import {combineReducers} from 'redux';  //引入合并combineReducers

export default combineReducers ({
	home,
	profile
})