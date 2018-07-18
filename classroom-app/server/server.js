/*
* @Author: duqinzhi
* @Date:   2018-07-16 21:52:04
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-17 17:48:59
*/
let express = require("express");
let app = express();
let sliders = require('./mock/sliders.js');
let lessonList =require('./mock/lessons.js');

//跨域请求头
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //允许哪个端口访问  *可以被代替为"http://localhost:8080"
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  //允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
    res.header('Access-Control-Allow-Credentials', 'true'); //允许携带凭证 允许跨域设置cookie（cookie也有跨域问题只能在同域下设置，跨域就没有了）
    res.header("X-Powered-By",' 3.2.1')                                    
    if (req.method == 'OPTIONS') {
      return res.end(); /*让options请求快速返回*/
 	}  
 	else next();
});

//设置路由
app.get('/slider',function(req,res){  //轮播图
	res.json(sliders);
});   
app.get('/lessonList/:type/:offset/:limit',function(req,res){   //获取课程
	res.json(lessonList);
})

app.listen(1006);
