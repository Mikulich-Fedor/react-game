import React from 'react'
import rsSchool from '../img/rs_school_js.svg'
import github from '../img/github.png'

const styles = {
    footer: {
        display: "flex",
        height: "10vh",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "auto",
        backgroundColor: "#53a9dbab"
    },
    imgRs: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px"
    },
    autor:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "#000"
    },
    git: {
        height: "20px",
        width: "20px"
    }
}

function Footer(){
    return (
        <footer style = {styles.footer}>
            <a style={styles.imgRs} target="_banck" href="https://rs.school/js/"><img src={rsSchool} alt="rs"/></a>
            <span><b>2021</b></span>
            <a style={styles.autor} target="_banck" href = "https://github.com/Mikulich-Fedor"><img style={styles.git} src={github} alt="github" /> Mikulich Fiodar</a>
        </footer>
    )
}

export default Footer;