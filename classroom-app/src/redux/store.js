/*
* @Author: duqinzhi
* @Date:   2018-07-16 18:07:22
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-16 19:27:38
*/
import {createStore} from 'redux';

import reducers from './reducers/index.js';   //引入reducers函数

var store = createStore(reducers);
export default store;