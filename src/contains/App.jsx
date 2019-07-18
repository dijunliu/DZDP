import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../contains/Home';
import User from '../contains/User';



class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            initState:true
        }
    }

    
    render(){
       
        return(
            <div>
                { this.state.initState ? 
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/user" component={User}/>
                    </div> : 
                    <div>loading........</div> 
                }
                
            </div>
        )
    }
}

export default App