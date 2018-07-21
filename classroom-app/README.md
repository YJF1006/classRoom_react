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
 * 3.下拉刷新里面为了防止滚动一直触发，可以采用节流方法
        利用定时器，隔50秒清一次定时器，所以在50秒里面滚动多次的时候的时候最后出现一次
    4. componentWillReceiveProps生命周期
        1. 父组件数据更新，会触发子组件的WillReceiveProps,此钩子函数，父组件没有发生状态的变化，子组件不更新数据 
        2. 当页面切换时候，父组件的数据没有更新，当切换回来之后，子组件中的数据不发发生变化了 导致不能下拉加载更多
        解决方法
        给父组件的这个生命周期里面调用一个 this.forceUpdata()   强制刷新
    5. 为了防止切换回来自动回到最顶端，采用记录滚动条位置
        在Home组件即将要销毁(componentWillUnmount)的时候记录下滚动条的位置（sessionStorage。setItem()）
        在Home组件(componentDidMount)强制刷新(this.forceUpdata() )的时候，取出记录的位置
    6.详情页中，解构传过来的this,props.location.state的时候,通过主页点进去对着呢，，直接在url输入detail会报错  
        原因是:当直接输入的时候，那么state会是undefined,所以解构会报错，
        解决方法：   let {} = state || {}    //给解构的加一个或者{}
    7. 登录页面没有下面的导航栏，此时不要去App.js里面进行判断了 ，直接写登录页面的样式，盖住就行了（技巧）
        解决方法：  1.绝对定位，上下左右均为0；       2.层级最高；      3.背景颜色为白色透明
        {
            position：absolute;
            上下左右全为0；
            z-index:100;
            background:#fff
        }
    8. 只有通过路由渲染的页面才有history属性
        解决 : 要想与history 属性，用withRouter(react-router-dom系统库里面的)包装一下
        用法 : export default withRouter(需要history的组件名称)
    9.md5 摘要算法  不可逆
        1.任意字符串转换出来的大小都相同
        2.不同内容转化出来的值不同
        3.不可逆 
    10. 测试接口
        可以用git bash测试输入的内容如下
            $ curl -x POST --data 'username=123&password=456' http://localhost:1006/reg
        备注： '是发送的内容'   http后面是访问的地址
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

