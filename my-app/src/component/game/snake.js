import React from 'react'
import './game.style.css';


function Snake(props){
    return(
        <div>{
            props.snakeDots.map((dot , i) => {

                const styles = {
                    top: `${dot[0]}%`,
                    left: `${dot[1]}%`
                }

                return(
                    <div className="snake" key = {i} style={styles} ></div>
                )
            })
        }</div>
    )
}
export default Snake; 