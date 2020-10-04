import React, { useEffect, useContext, useState } from 'react'
import ConsultCard from '../ConsultCard'
import UseContext from '../../context/UserContext'
import { getCallService } from '../../utils/auth-api'
import './Consult.css'

function Repair(){
    const {userData} = useContext(UseContext)
    const [callsState, setCalls] = useState([])
    const calls = []

    useEffect(() => {
        const getCalls = async () => {
            const res = await getCallService(userData.user._id)

            res.data.forEach(element => {
                calls.push(element)              
            });

            setCalls(calls)
        }

        getCalls()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
        <div className="center">Seus Chamados registrados</div>
        <div className="consultMain">
            {callsState.map((element) => {
                return <ConsultCard key={element._id} props={element} />
            })}
        </div>
        
        </>
    )
}

export default Repair