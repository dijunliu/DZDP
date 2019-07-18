import React from 'react';
import './style.less';


class HomeHead extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
       
        return(
            <div className='home-header clearfix'>
                <div className='home-header-left f-l'>
                    {this.props.city}
                    <span className="iconfont icon-RectangleCopy3"></span>
                </div>
                <div className='home-header-right f-r'>
                    <span class="iconfont icon-RectangleCopy2"></span>
                </div>
                <div className='home-header-middle'>
                    <span class="iconfont icon-RectangleCopy1"></span>
                    输入商户名、地点
                </div>                 
            </div>
        )
    }
}

export default HomeHead