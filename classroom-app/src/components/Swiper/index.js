/*
* @Author: duqinzhi
* @Date:   2018-07-17 14:58:13
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-18 11:34:12
*/
/*轮播图组件*/
import React from 'react'
import ReactSwipe from 'react-swipe';
import './index.css';
export default  class Swiper extends React.Component {
  constructor(){
    super();
    this.state={index:0};
  }
    render() {
        let ops={
          continuous: true,
          callback:(index)=>{
            this.setState({
              index:index
            })
          }
        };
        return (
        	<div className='swiper'> 
   {/*轮播图显示*/}
        		{this.props.data.length?
        			<ReactSwipe className="carousel" swipeOptions={ops}> 
    						{this.props.data.map((item,index)=>(
    							<div className='swiper' key= {index}>
    								<img src={item} alt=""/>
    							</div>
    						))}
           		</ReactSwipe>
           	:
           		<div>正在加载中</div>}
    {/* 轮播图的小点点*/}
        		<div className='dots'>
              {this.props.data.map((item,index)=>(
                <span key={index} className={index===this.state.index?'active':''}> </span>
                 //要是当前的index等于state里面的index,那么增加一个active类名
              ))}
                
            </div>

        	</div>

        );
    }
}
/*轮播图组件中
	1.continuous代表是否循环
	2.三元表达式【判断，data里面有值，就有轮播图，没有值就显示正在加载 
 */

