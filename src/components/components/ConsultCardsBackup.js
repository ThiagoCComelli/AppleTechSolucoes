import React from 'react'
import '../styles/ConsultCard.css'

export default function ConsultCard(props){
    
    return(
        <>
        <div className="mainConsultCard">
            <div className="consultTitle">
                <h4>Registro #{props.props._id}</h4>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Nome:</label>
                    <input type="text" value={props.props.name} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Email:</label>
                    <input type="text" value={props.props.email} readOnly></input>
                </div>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Telefone:</label>
                    <input type="text" value={props.props.phone0} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Telefone alternativo:</label>
                    <input type="text" value={props.props.phone1} readOnly></input>
                </div>
            </div>

            <div className="consultDesc">
                <h4>Descrição do serviço</h4>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Tipo de dispositivo:</label>
                    <input type="text" value={props.props.device} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Marca/modelo:</label>
                    <input type="text" value={props.props.brand} readOnly></input>
                </div>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Tempo de uso:</label>
                    <input type="text" value={props.props.usageTime} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Breve descrição:</label>
                    <input type="text" value={props.props.shortDesc} readOnly></input>
                </div>
            </div>
            <div className="consultContainer">
                <label>Descrição detalhada:</label>
                <textarea rows="6" value={props.props.desc} readOnly></textarea>
            </div>
        </div>
        </>
    )
}