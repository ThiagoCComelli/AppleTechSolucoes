import React, { useEffect, useState } from 'react'
import ConsultCard from '../components/ConsultCard'
import { getAllCalls, getFilterCall } from '../../utils/auth-api'
import '../styles/Consult.css'

function CallPageAdmin(){
    const [callsState, setCalls] = useState([])
    const [filter,changeFilter] = useState({target:null,text:null})
    const [loading,changeLoading] = useState(true)
    var calls = []

    const filterCall = async (e) => {
        e.preventDefault()

        changeLoading(true)

        calls = []
        
        const res = await getFilterCall(filter)

        try{
            res.data.forEach(element => {
                calls.push(element)
            })
            
            setCalls(calls)
            
        }catch{
            
        }
        changeLoading(false)
    }

    const getCalls = async () => {
        changeLoading(true)

        const res = await getAllCalls()

        res.data.forEach(element => {
            calls.push(element)              
        });

        setCalls(calls)

        changeLoading(false)
    }

    useEffect(() => {

        getCalls()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
        <form onSubmit={filterCall}>
            <div className="center">Chamados encontrados</div>
            <div className="consultMainFilter">
                <div className="consultFilter">
                    <h2>Busca específica</h2>
                    <div className="consultContainerFilter">
                        <p>Parâmetro:</p>
                        <select onChange={(e) => {changeFilter({...filter,target:e.target.value})}} defaultValue="" id="calls" name="typeCalls" required>
                            <option value="" disabled hidden>Escolha uma opção</option>
                            <option value="email">Email</option>
                            <option value="_id">ID do chamado</option>
                        </select>
                    </div>
                    <input onChange={(e) => {changeFilter({...filter,text:e.target.value})}} type="text" required></input>
                    <button type="submit">Pesquisar</button>
                    <button type="button" onClick={getCalls}>Resetar</button>
                </div>
            </div>
        </form>
        <div className="consultMain">
            {loading ? <h1>Loading...</h1> : null}
            {callsState.map((element) => {
                return <ConsultCard key={element._id} props={element} />
            })}
        </div>        
        </>
    )
}

export default CallPageAdmin