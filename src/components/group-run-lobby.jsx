import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { addToRunnerJoinedCount } from '../actions.js';


class GroupRunActive extends (React.Component) {
   
    addRunnerToCount(event){
        this.props.addToRunnerJoinedCount({});
    }    

    render() {
        return ( 
            <div >
                <table className="runLobbyTable">
                    <tr>
                        <th>Group ID:</th>
                        <th>Total Runners:</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{this.props.runnersJoinedCount}/10</td>
                        <td><Button
                                variant="contained"
                                component={Link} 
                                to="/run-ready" 
                                onClick={(e) => this.addRunnerToCount(e)}>
                            Join</Button>
                        </td>
                    </tr> 
                </table>
                    <Button variant="contained" color="primary" component={Link} to="/" >Return Home</Button>
            </div>
        );
    }
}


//reads data from state(component) and maps to this.props.shopping_list
function mapStateToProps(state) {
    return {
        runnersJoinedCount: state.runnersJoinedCount,
    }; 
}
//writes data to store
function mapDispatchToProps (dispatch) {
    return {
        addToRunnerJoinedCount: function (data) {
            dispatch(addToRunnerJoinedCount(data))
        }
    }
}

var ConnectedGroupRunActive = connect(mapStateToProps, mapDispatchToProps)(GroupRunActive);

export default ConnectedGroupRunActive;