import React, { Component } from 'react'

class Nav extends Component {
    // eslint-disable-next-line no-undef
    state = {
        menu : [
            "start","level"
        ],
        level: 120
    }

    // eslint-disable-next-line no-undef
    click = (elem,i) => {
        if(elem === "start" ){
            this.props.hendler("play", this.state.level)

        } else if (elem === "level"){
            this.setState({menu:["easy", "normal", "hard", "back"]})
        } else if (elem === "easy"){
            this.setState({
                level: 120
            })
            this.props.hendler( "stop", this.state.level)
        } else if (elem === "normal"){
            this.setState({
                level: 50
            })
            this.props.hendler("stop", this.state.level)
        } else if (elem === "hard"){
            this.setState({
                level: 30
            })
            this.props.hendler("stop", this.state.level)
        } else if (elem === "back"){
            this.setState({menu:["start","level"]})
        }
    }

    render(){
        return(
        <div className = "nav">
            {this.state.menu.map((elem,i) => {
                return (
                    <div key={i} onClick={() => {this.click(elem,i)}} className = "linkNav" href="#">{elem}</div>
                )
            })}
        </div>
        )
    }
}

export default Nav;