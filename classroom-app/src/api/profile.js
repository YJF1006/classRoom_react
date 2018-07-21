/*
* @Author: duqinzhi
* @Date:   2018-07-19 09:29:39
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-19 10:52:14
*/
//所有接口的方法都加s防止混乱出错
import {post,get} from './index.js';

let url = 'http://localhost:1006';
//注册接口
export const regs = (userInfo)=>{
	return post(url+'/reg',userInfo);
}