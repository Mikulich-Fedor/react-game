import React, { Component } from 'react'
import Snake from './snake'

const stules = {
    plase: {
        position: "relative",
        height: "500px",
        width: "500px",
        backgroundColor: "rgb(170, 170, 170)",
        border: "2px solid #000",
        borderRadius: "5px"
    }
}

class GamePlace extends Component {
    
    // eslint-disable-next-line no-undef
    state = {
        snakeDots: [
            [0,0],
            [0,2],
            [0,4]
        ]
    }

    render(){
        return(
            <div style = {stules.plase}>
                <Snake snakeDots = {this.state.snakeDots} />
            </div>
        )
    }
}

export default GamePlace;