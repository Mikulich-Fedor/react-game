import React from 'react';

function Food (props){

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[0]}%`
    }

    return(
        <div className="food" style={style}></div>
    )
}
export default Food;