import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../contains/App';




class RouterMap extends React.Component{
    
    render(){
        return(
            <BrowserRouter>
                <Route  path="/" component={App}/>
            </BrowserRouter>
        )
    }
}

export default RouterMap