import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';


class GroupRunReadyUp extends (React.Component) {


    componentDidMount() {
        console.log('mounted');
        this.props.socket.emit('get_rooms');
    }

    // onlick => this.socket.emit(cmd, data)
    
    

    render() {
        var myroom = parseInt(this.props.match.params.room);
        console.log('props', this.props, this.props.rooms[myroom]);
        console.log('runnersJoined',this.props.rooms.runnersJoined);
        return ( 
            <div >
                <table className="runReadyTable">
                    {this.props.rooms[0].runnersJoined.map((runner, i) => {
                        return(
                            <tr>
                                <td>Runner ID:</td>
                                <td>{runner}</td>
                                <td>
                                    <form>
                                        <input type="checkbox"></input>
                                        <label for="Ready Up" style={{marginLeft: "10px"}}>Ready Up</label>
                                    </form>
                                </td>
                            </tr>
                        );
                    })}
                </table>

                <Button variant="contained" color="primary" component={Link} to="/run-active" >Run Royale!</Button>
                <Button variant="contained" component={Link} to="/" >Leave Lobby</Button>

            </div>
        );
    }
}


//reads data from state(component) and maps to this.props.shopping_list
function mapStateToProps(state) {
    return {
        runnersJoinedCount: state.runnersJoinedCount,
        runnersJoined: state.runnersJoined,
        rooms: state.rooms,
        socket: state.socket
    }; 
}
//writes data to store
function mapDispatchToProps (dispatch) {
    return {}
}

var ConnectedGroupRunReadyUp = connect(mapStateToProps, mapDispatchToProps)(GroupRunReadyUp);

export default ConnectedGroupRunReadyUp;
