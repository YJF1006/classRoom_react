/*
* @Author: duqinzhi
* @Date:   2018-07-16 18:07:22
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-17 11:41:04
*/
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index.js';   //引入reducers函数
import reduxThunk from 'redux-thunk';  //允许action自定义dispatch
var store = createStore(reducers,applyMiddleware(reduxThunk));
export default store;