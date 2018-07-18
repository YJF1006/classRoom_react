/*
* @Author: duqinzhi
* @Date:   2018-07-17 10:39:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-17 11:37:08
*/

//用fetch书写
export const get = (url)=>{
	return fetch(url,{
		method:'get',
		credentials:'include',  //跨域携带cookie  凭证
		headers:{
			accept:'application/json'   //返回的数据的类型
		}
	}).then(res=>res.json())   //成功之后有个then,返回结果
}
//get用法   get('/slider').then(data=>{})  //then之后对结果进行处理

export const post = (url,data)=>{  //url:请求体  data:请求数据
	return fetch(url,{
		method:'post',
		credentials:'include',
		headers:{
			'Content-Type':'application/json',  //发送的数据类型
			accept:'application/json'           //接收到的数据类型
		},
		body:JSON.stringify(data)    //把data转化成字符串类型传了
	}).then(res=>res.json())
}


