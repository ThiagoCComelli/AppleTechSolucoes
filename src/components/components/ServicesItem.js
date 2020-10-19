import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ServicesItem.css'

function ServicesItem(){
    return(
        <>
        <div className="center">
            <h1 className="main-text">Serviços</h1>
        </div>
        <div className="contents">
            <div className="container container-first">
                <Link to="/services/repair">
                    <img src={`${process.env.PUBLIC_URL}/images/image5-mim.png`} alt="Servicos"/>
                    <div className="container-text">
                        <h2>CONCERTO</h2>
                    </div>
                </Link>
            </div>
            <div className="container container-second">
                <Link to="/services/consult">
                    <img src={`${process.env.PUBLIC_URL}/images/image5-mim2.png`} alt="Servicos"/>
                    <div className="container-text">
                        <h2>CONSULTA</h2>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default ServicesItem