import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ConsultCard.css'

export default function ConsultCard(props){
    
    return(
        <>
        <div className="mainConsultItem">
            <div className="titleConsult">
                <strong>{props.props.brand}</strong>
                <p>{props.props.shortDesc}</p>
                <span>#{props.props._id}</span>
            </div>
            <Link to={{pathname:'/call',state:props}}>
                <button>
                    <strong>Acesse</strong>
                </button>
            </Link>
        </div>
        </>
    )
}