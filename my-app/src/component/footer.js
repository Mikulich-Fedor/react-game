import React from 'react'

const styles = {
    footer: {
        display: "flex",
        height: "10vh",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "auto"
    }
}

function Footer(){
    return (
        <footer style = {styles.footer}>
            <a target="_banck" href  = "https://rs.school/js/"> Rs school </a>
            <span>2021</span>
            <a target="_banck" href = "https://github.com/Mikulich-Fedor"> Git </a>
        </footer>
    )
}

export default Footer;