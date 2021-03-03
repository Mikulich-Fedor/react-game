import React, {Component} from 'react'

// eslint-disable-next-line no-unused-vars
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
        this.state = {   
            level: 120,
            game: "stop",
            component: [
                <Title />,
                <Nav hendler = {this.hendlerGame} />,
            ]
        }
    }

    // eslint-disable-next-line no-undef
    hendlerGame = (checkGame, checklevel) => {
        this.setState({
            game: checkGame,
            level: checklevel
        })
        if(checkGame === "play"){
     
            this.setState({
                component: [
                    <GamePlace finish={this.finish} level={checklevel}  />
                ]
            })
        }
    }

    // eslint-disable-next-line no-undef
    finish = (finish) => {
          if(finish === "finish"){
            this.setState({
                component: [
                    <Title />,
                    <Nav hendler = {this.hendlerGame} />
                ]
            })
          }
    }
    
 
    render (){
        return(
            
            <main style = {styles.main}>

            { 
                this.state.component.map((elem,i) => {
                    return(
                        <slot key={i}>{elem}</slot>
                    )
                })
            }           
                
            </main>
        )
    }
}

export default Main;