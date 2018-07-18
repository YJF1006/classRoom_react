/*
* @Author: duqinzhi
* @Date:   2018-07-15 17:17:24
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 21:40:24
*/

import React from 'react';   //引入react
import {render} from 'react-dom';   //引入渲染
import {Provider} from 'react-redux';  //引入系统库 最外层的组件，用来包裹所有，使得store变成公用的
import {HashRouter as Router,Route,Switch} from 'react-router-dom';  //引入路由相关的
//引入各个页面级组件
import Home from './containers/Home/index.js';  
import Lesson from './containers/Lesson/index.js';
import Profile from './containers/Profile/index.js';
import App from './containers/App.js';
//引入store
import store from './redux/store.js';
//引入样式
import './common/index.css';  //引入公共的样式
window._store = store;   //把store挂载在window上

render(
	<Provider store = {store}>	 
		<Router>   
			<App>  
				<Switch>  
					<Route exact path={'/'} component={Home}></Route>  
					<Route path={'/lesson'} component={Lesson}></Route>
					<Route path={'/profile'} component={Profile}></Route>
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById('app')
) 
/*上面的结构解析
1.Provider   最外层包裹传递store                                 系统库
2.Router   路由包裹												系统库
3.App      整个页面的布局，他有三个children,让匹配一个传给props     手写组件
   Switch代表只匹配一个 exact 表示精准匹配                         系统库
   			route  单个路由的组件                                 系统库                                
*/
