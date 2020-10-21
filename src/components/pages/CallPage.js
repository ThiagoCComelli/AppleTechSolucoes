import React, {useContext, useEffect, useState} from 'react'
import { deleteCall, changeCallState } from '../../utils/auth-api'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import { notification } from '../../utils/middlewareNotifications'

import '../styles/CallPage.css'

const Form = (props) => {
    const history = useHistory()
    const { userData } = useContext(UserContext)

    const deleteCallFunc = async () => {
        const res = await deleteCall({id:props.props._id, token:userData.token})
        if(res){
            notification({title:"Chamado deletado!",message:"Operação realizada com sucesso.",type:"success"})
            history.push('/')
        }
    }

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
            <button onClick={deleteCallFunc}>Deletar</button>
        </div>
        <FormStates props={props.props.state} id={props.props._id}/>
        </>
    )
}

const MiniState = (props) => {
    return (
        <>
        <div key={props.props._id} className="dateConsult" >
            {props.props.date}: <strong className={`state${props.color}`}>{props.props.state}</strong> | <span>{props.props.message}</span>
        </div>
        </>
    )
}

const FormStates = (props) => {
    const history = useHistory()
    const {userData} = useContext(UserContext)
    const [callsState, setCalls] = useState([])
    const [changes,modChanges] = useState({state:null,desc:null})
    const calls = []

    const sendCallState = async (e) => {
        e.preventDefault()

        const res = await changeCallState({id:props.id, changes:changes})
        if(res){
            notification({title:"Novo estado registrado!",message:"Operação realizada com sucesso.",type:"success"})
            history.push('/call-page-admins')
        }
    }

    useEffect(() => {
        const getCalls = async () => {
            props.props.lista.forEach(element => {
                calls.push(element)              
            });

            setCalls(calls)
        }

        getCalls()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <>
        <div className="mainConsultCardState">
            <h3>Situação atual: {props.props.currentType}</h3>
            {callsState.map((element) => {
                var color

                if(element.state === 'Chamado finalizado'){
                    color = 'Green'
                } else if (element.state === 'Em análise'){
                    color = 'Yellow'
                } else if (element.state === 'Chamado iniciado'){
                    color = 'Blue'
                }

                return <MiniState key={element._id} color={color} props={element} />
            })}
            { userData.user.userType === "admin" ?
                <>  
                <hr></hr>
                <form onSubmit={sendCallState}>
                    <div className="stateSelectArea">
                        <p>Novo registro:</p>
                        <select onChange={(e) => modChanges({...changes,state:e.target.value})} defaultValue="" id="calls" name="typeCalls" required>
                            <option value="" disabled hidden>Escolha uma opção</option>
                            <option value="Em análise">Em análise</option>
                            <option value="Chamado iniciado">Chamado iniciado</option>
                            <option value="Chamado finalizado">Chamado finalizado</option>
                        </select>
                    </div>
                    <textarea onChange={(e) => modChanges({...changes,desc:e.target.value})} rows="2" placeholder="Detalhe ao registro" value={props.props.desc} required></textarea>
                    <button type="submit">Enviar registro</button>
                </form>
                </>
            : console.log(1)}
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
                <h4>Detalhes do chamado</h4>
            </div>
            { props.location.state !== undefined ? <Form props={props.location.state.props}/> : history.push('/') }
        </div>
        </>
    )
}