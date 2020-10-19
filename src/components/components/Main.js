import React from 'react'
import '../styles/Main.css'
function Main(){
    return(
        <>
        <div className="hero">
            <video src={`${process.env.PUBLIC_URL}/videos/AppleStore.mp4`} autoPlay muted loop className="myVideo" />
            <div className="hero-text">
                <h2>AppleTech Soluções</h2>
                <p>Trazendo soluções desde 2006</p>
            </div>
        </div>
        </>
    )
}

export default Main