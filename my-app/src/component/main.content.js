import React, {Component} from 'react'

import GamePlace from './game/game.palce'
import Nav from './nav'
import Title from './title'

const styles = {
    main: {
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(77, 77, 77, 0.7)",
    }
}

class Main extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        document.onclick = this.clickEvent;
    }
    componentDidUpdate(){
    }

    // eslint-disable-next-line no-undef
    clickEvent = (e) => {
        e = window.event
        console.log([e.target.innerText])
        switch(e.target.innerText){
            case "Start":
                console.log("go Start")
            break;
            case "level":
                console.log("go level")
            break;
            
            default:
            break;
        }
    }



    render (){
        return(
            <main style = {styles.main}>
                <Title />
                <Nav />
                {/* <GamePlace /> */}
            </main>
        )
    }
}

export default Main;