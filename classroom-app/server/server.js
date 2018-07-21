/*
* @Author: duqinzhi
* @Date:   2018-07-16 21:52:04
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-21 09:14:17
*/
let express = require("express");
let app = express();
let sliders = require('./mock/sliders.js');
let lessonList =require('./mock/lessons.js');
let User = require('./model/index');
//使用session中间件
let session = require('express-session');
let mongoStore = require('connect-mongo')(session);//把session存到mongo里面
app.use(session({
    secret: 'dqz',    // session库加密
    resave: true,   //每次是否重新保存
    saveUninitialized: true,  //每次保存未初始化的session
    store:new mongoStore({
        url:'mongodb://localhost:27017/reactKeTang'
    })
}));
//使用md5加密
let crypto =require('crypto'); 
let md5 =(val)=>{
	return crypto.createHash('md5').update(val).digest('base64');;
}
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
// app.post('/reg',function(req,res){
// 	//加密密码
// 	req.body.password = md5(req.body.password);
// 	console.log(req.body);
// 	User.findOne({username:req.body.username}).then(data=>{
// 		if(data){
// 			res.json({err:'用户已经存在'});
// 		}else{
// 			User.create(rea.body).then(data=>{
// 				req.session.user = data;   //将当前用户存到session中
// 				req.json(req.session.user);
// 			})
// 		}
// 	})
// })
// 实现注册功能
app.get('/reg',function(req,res){
	//加密密码
	req.body.password = md5(req.body.password);
    User.findOne({username:req.body.username}).then(data=>{
        console.log(data);
        if(data){
            res.json({err:'用户存在了'})
        }else{
            User.create(req.body).then(data=>{
                req.session.user = data;   //将当前用户存在session中
                req.json(req.session.user);
            })
        }
    })
	
});

app.listen(1006);
  
