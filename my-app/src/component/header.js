import React from 'react'

const styles = {
    head: {
        display: "flex",
        height: "10vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#53a9dbab"
    }
}

export default function Header(){
    return(
        <header style = {styles.head} >
            <h1>Snake</h1>
        </header>
    )
}