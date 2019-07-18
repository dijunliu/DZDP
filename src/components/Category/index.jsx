import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.less';

class Category extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    render(){
        const imgList = 'food,hotel,drink,hairDressing,HotPot,movie,shopping,takeAway,travel,food,hotel,drink,hairDressing,HotPot,movie,shopping,takeAway,travel,food,hotel,drink,hairDressing,HotPot,movie,shopping,takeAway,travel,food,hotel,drink,hairDressing,HotPot,movie,shopping,takeAway,travel'
												.split(',')
												.map(v=>({
													icon:require(`../../static/image/Carousel/${v}.png`),
													text:v
                                                }))
        const imgMap = {
            food:"美食",
            hotel:"酒店",
            drink:"饮料",
            hairDressing:"美发",
            HotPot:"火锅",
            movie:"电影",
            shopping:"购物",
            takeAway:"外卖",
            travel:"景点"
        }
                                                
        const opt = {
            //auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        let onePage = imgList.slice(0,10).map(v => (
            <li className="float-left jingdian">
                <img src={v.icon}/>
                <div>{imgMap[v.text]}</div>
            </li>
        ))
        return(
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            { onePage }
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            { onePage }
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            { onePage }
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Category