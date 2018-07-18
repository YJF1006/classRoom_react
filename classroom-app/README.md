## 一：项目结构
- src 是项目的源码
- index 入口
- containers 容器组件   页面级组件 
    + Home 首页
    + Lesson 课程页面
    + Profile 个人设置  
- components  基础组件
- redux 存储数据
    + action  存储状态的
    + reducers  存储处理函数的
    + action-types


/** 二：项目中遇到的问题与排查
 * 1. 点击HomeHeader里面icon两个图标  当点击展开图标的时候，网页呈现空白（在做动画功能的过程中）
 *     原因：动画CSSTransition标签里面的有一个属性  classNames ='动画名称'  把classNames 拼写成 clasName 
 *     解决方法：拼写正确即可  ，通过npm上面找到react-transition-group 插件的使用方法，发现拼写错误
 */



/** 三：项目中的知识点
 * 1.跨域请求头experss框架里面的
 //跨域请求头  重点重点重点
    const app = express();
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");                  //允许哪个端口访问  *可以被代替为"http://localhost:8080"
        res.header("Access-Control-Allow-Headers", "X-Requested-With");  //允许接收的头
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");   //允许的方法
        res.header('Access-Control-Allow-Credentials', 'true'); //允许携带凭证 允许跨域设置cookie（cookie也有跨域问题只能在同域下设置，跨域就没有了）
        res.header("X-Powered-By",' 3.2.1')                                    
        if (req.method == 'OPTIONS') {
          return res.end(); /*让options请求快速返回*/
        }  
        else next();
    });

 * 2.redux是单向数据流
 */

/** 四：一般书写代码的顺序
 * 1. 存入redux
    - 先定义redux中的数据长什么样子（在reducer文件夹里面）
    - 写有服务端接口  （在server.js）
    - 获取接口的方法(api文件中) 
    - 通过action将获取的数据发送到reducer(先写action-types,再写action,再写reducer )   fetch  axious 获取数据 
    - 通过reducer改变redux中的状态  
    - 最后在组件中调用action里面的方法
 */

