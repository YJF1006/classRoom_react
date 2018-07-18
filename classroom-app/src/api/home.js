/*
* @Author: duqinzhi
* @Date:   2018-07-17 11:05:22
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 08:04:31
*/
//所有home里面用到的api接口的方法      所有接口的方法都加s防止混乱出错
import {get} from './index.js';
let url = 'http://localhost:1006';

//获取轮播图
//最终我们调用的是getSliders函数   get函数返回的是fetch函数，给他一个请求路径
export const getSliders = ()=>{
	return get(url+'/slider');
};

export const getLessons =(type,offset,limit)=>{
	return get(`${url}/lessonList/${type}/${offset}/${limit}`);
}
