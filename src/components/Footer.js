import React from 'react'
import './Footer.css'

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

        </div>
        </>
    )
}

export default Footer