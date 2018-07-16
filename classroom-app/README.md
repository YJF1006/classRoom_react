## 项目结构
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


/**项目中遇到的问题与排查
 * 1. 点击HomeHeader里面icon两个图标  当点击展开图标的时候，网页呈现空白（在做动画功能的过程中）
 *     原因：动画CSSTransition标签里面的有一个属性  classNames ='动画名称'  把classNames 拼写成 clasName 
 *     解决方法：拼写正确即可  ，通过npm上面找到react-transition-group 插件的使用方法，发现拼写错误
 */



/**
 * 1.redux是单向数据流
 */


