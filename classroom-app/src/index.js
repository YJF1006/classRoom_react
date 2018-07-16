/*
* @Author: duqinzhi
* @Date:   2018-07-15 17:17:24
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 08:54:56
*/
import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './containers/Home/index.js';
import Lesson from './containers/Lesson/index.js';
import Profile from './containers/Profile/index.js';
import App from './containers/App.js';

import './common/index.css';
render(
	<Router>
		<App>
			<Switch>  {/*Switch代表只匹配一个 exact 表示精准匹配*/}
				<Route exact path={'/'} component={Home}></Route>  
				<Route path={'/lesson'} component={Lesson}></Route>
				<Route path={'/profile'} component={Profile}></Route>
			</Switch>
		</App>

	</Router>,
	document.getElementById('app')
)