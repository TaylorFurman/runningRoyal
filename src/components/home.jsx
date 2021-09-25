import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import BarGraph from './BarGraph'



import { Button } from '@material-ui/core';




class Home extends (React.Component) {

    componentDidMount(){
        fetch('http://localhost:3700/run_data',{
            method: 'GET',
            headers:{
                "Content-Type":"application/json"
            },    
        })

        
    }
    
            

    render() {
        return ( 
            <div>
                <h1>Welcome Back!</h1>

                <BarGraph/>
                
                {/* <h3 style={{color:"red"}}>Click below to find a lobby</h3> */}
                <Button variant="contained" color="primary" component={Link} to="/run-lobby" >Join A Run</Button>
            </div>
        );
    }
}


//reads data from state(component) and maps to this.props.shopping_list
function mapStateToProps(state) {
    return {

    }; 
}
//writes data to store
function mapDispatchToProps (dispatch) {
    return {}
}

var ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;