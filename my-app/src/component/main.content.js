import React from 'react'

import GamePlace from './game/game.palce'

const styles = {
    main: {
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
    }
}

function Main(){
    return (
        <main style = {styles.main}>
            <GamePlace />
        </main>
    )
}

export default Main;