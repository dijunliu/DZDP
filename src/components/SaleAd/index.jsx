import React from 'react';

class SaleAd extends React.Component{
    render(){
        return(
            <div>
                <h2>超级特惠</h2>
                <div className='ad-list'>
                    <div className='ad-item'>
                        <span>221</span>
                        <a>
                            <img src={require('../../static/image/SaleAd/foodSA.png')}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SaleAd