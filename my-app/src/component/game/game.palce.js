import React, { Component } from 'react'
import Snake from './snake'
import Food from './food'

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

const getRandomXY = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor(Math.random() * (max - min + 1) / 2 ) * 2;
    let y = Math.floor(Math.random() * (max - min + 2) / 2 ) * 2;
  return [x, y]
}


const initialGame = {
    food: getRandomXY(),
    speed: 100,
    direction: "Right",
    snakeDots: [
        [0,0],
        [2,0],
        [4,0]
    ]
}

class GamePlace extends Component {
    
    // eslint-disable-next-line no-undef
    state = initialGame ;

    componentDidMount(){
        setInterval(() => {
            this.moveSnake()
        }, this.state.speed);
        this.moveSnake();
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate(){
        
        this.eatFood();
        this.border();
        this.checkTail();
    }

    // eslint-disable-next-line no-undef
    onKeyDown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 37:
                this.setState({direction: "Left"});
             break; 
             case 38:
                this.setState({direction: "Up"});
             break;
             case 39:
                this.setState({direction: "Right"});
             break;
             case 40:
                this.setState({direction: "Down"});
             break;
                
            default:
            break;
        }
    }

    // eslint-disable-next-line no-undef
    moveSnake = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];


        switch(this.state.direction){
            case "Left":
                head = [ head[0] - 2, head[1] ]
            break;
            case "Up":
                head = [ head[0], head[1] - 2 ]
            break;
            case "Right":
                head = [ head[0] + 2, head[1] ]
            break;
            case "Down":
                head = [ head[0], head[1] + 2 ]
            break;
            default:
            break;
        }
        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots: dots
        })
    }

    eatFood(){
        let food = this.state.food;
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];

        if(food[0] === head[0] && food[1] === head[1]){
            this.setState({
                food: getRandomXY()
            })
            this.newSnake()
        }
    }

    checkTail(){
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();

        snake.forEach(dot => {
            if(dot[0] === head[0] && dot[1] === head[1]){
                this.gameOver()
            }
        })
    }

    newSnake(){
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        console.log(newSnake)
        this.setState({
            snakeDots: newSnake
        }) 
    }

    border(){
        let head = this.state.snakeDots[this.state.snakeDots.length - 1]
        if(head[0] >= 100 || head[0] < 0  || head[1] >= 100 || head[1] < 0){
            this.gameOver()
        }
    }

    gameOver(){
        alert(`Game over ${this.state.snakeDots.length}`)
        this.setState(initialGame)
    }

    render(){
        return(
            <div style = {stules.plase}>
                <Snake snakeDots = {this.state.snakeDots} />
                <Food dot = {this.state.food} />
            </div>
        )
    }
}

export default GamePlace;