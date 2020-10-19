import React from 'react'
import '../styles/Footer.css'

function Footer(){
    return (
        <>
        <div className="footer">
            <div className="footer-center">
                <a href="#nav">
                    <img src={`${process.env.PUBLIC_URL}/images/apple.png`} alt="Apple Logo" />
                </a>
            </div>
        </div>
        <div className="footer-end">
            <span>Developed by: Thiago Comelli || <a href="https://www.linkedin.com/in/thiagoccomelli/">Linkedin</a> || <a href="https://github.com/ThiagoCComelli">GitHub</a></span>
        </div>
        </>
    )
}

export default Footer