import React from 'react';
import HomeHead from '../../components/HomeHead';
import Category from '../../components/Category';
import SaleAd from '../../components/SaleAd';
import AMap from 'AMap';


// Home为智能组件为其他木偶组件提供需要的数据，如定位城市信息

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            city:''
        }
    }

    componentDidMount () {
        let map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //实例化城市查询类
        let citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        let that = this;
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    that.setState({
                        city:cityinfo
                    })
                    map.setBounds(citybounds);
                }
            } else {
                console.error(result.info)
            }
        });
    }

    render(){
        return(
            <div>
                 <HomeHead city={this.state.city}/> 
                 {/* 首页头部 */}
                 <Category/>
                 {/* 轮播图组件 */}
                 <SaleAd/>
            </div>
        )
    }
}

export default Home