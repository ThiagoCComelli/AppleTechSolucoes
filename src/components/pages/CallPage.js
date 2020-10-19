import React, {useContext} from 'react'
import { deleteCall } from '../../utils/auth-api'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import { notification } from '../../utils/middlewareNotifications'

import '../styles/CallPage.css'

const Form = (props) => {
    const history = useHistory()
    const { userData } = useContext(UserContext)

    const deleteCallFunc = async () => {
        const res = await deleteCall({id:props.props.props._id, token:userData.token})
        if(res){
            notification({title:"Chamado deletado!",message:"Operação realizada com sucesso.",type:"success"})
            history.push('/')
        }
    }

    return(
        <>
        <div className="mainConsultCard">
            <div className="consultTitle">
                <h4>Registro #{props.props.props._id}</h4>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Nome:</label>
                    <input type="text" value={props.props.props.name} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Email:</label>
                    <input type="text" value={props.props.props.email} readOnly></input>
                </div>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Telefone:</label>
                    <input type="text" value={props.props.props.phone0} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Telefone alternativo:</label>
                    <input type="text" value={props.props.props.phone1} readOnly></input>
                </div>
            </div>

            <div className="consultDesc">
                <h4>Descrição do serviço</h4>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Tipo de dispositivo:</label>
                    <input type="text" value={props.props.props.device} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Marca/modelo:</label>
                    <input type="text" value={props.props.props.brand} readOnly></input>
                </div>
            </div>
            <div className="consultContainerDouble">
                <div className="consultContainerDoubleItem">
                    <label>Tempo de uso:</label>
                    <input type="text" value={props.props.props.usageTime} readOnly></input>
                </div>
                <div className="consultContainerDoubleItem">
                    <label>Breve descrição:</label>
                    <input type="text" value={props.props.props.shortDesc} readOnly></input>
                </div>
            </div>
            <div className="consultContainer">
                <label>Descrição detalhada:</label>
                <textarea rows="6" value={props.props.props.desc} readOnly></textarea>
            </div>
            <button onClick={deleteCallFunc}>Deletar</button>
        </div>
        </>
    )
}

export default function CallPage(props){
    const history = useHistory()

    return(
        <>
        <div className="centerCallPage">
            <div className="center">
                <h4>Status do chamado</h4>
            </div>
            { props.location.state !== undefined ? <Form props={props.location.state}/> : history.push('/') }
        </div>
        </>
    )
}