import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../context/UserContext'
import { saveCallService } from '../utils/auth-api'
import './RepairForm.css'

export default function RepairForm(){
    const { userData } = useContext(UserContext)
    const history = useHistory()
    const [infos,changeInfos] = useState({
        owner: userData.user._id,
        name: userData.user.name,
        email: userData.user.email,
        phone0: userData.user.phone0,
        phone1: userData.user.phone1,
        device: "",
        brand: "",
        usageTime: "",
        shortDesc: "",
        desc: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await saveCallService(infos)

        if(res.data){
            history.push('/')
        }
    }

    return(
        <>
        <div className="center">
            <h4>Contratação de serviços</h4>
        </div>
        <div className="contentsRepair">
            <form onSubmit={handleSubmit} className="formRepair" spellCheck="false">
                <div className="sectionFormTitle">
                    <h2>Dados para contato</h2>
                </div>
                <div className="boxFormRepair">
                    <label>Nome Completo:</label>
                    <input type="text" value={infos.name} onChange={(e) => changeInfos({...infos,name:e.target.value})} placeholder="Thiago Comelli" required></input>
                </div>
                <div className="boxFormRepair">
                    <label>Email:</label>
                    <input type="email" value={infos.email} onChange={(e) => changeInfos({...infos,email:e.target.value})} placeholder="thiago.comelli@outlook.com" required></input>
                </div>
                <div className="boxFormRepairDuplo">
                    <div className="boxFormRepairDuploItem">
                        <label>Telefone:</label>
                        <input type="tel" value={infos.phone0} onChange={(e) => changeInfos({...infos,phone0:e.target.value})} placeholder="(48)99603-0226" required></input>
                    </div>
                    <div className="boxFormRepairDuploItem">
                        <label>Telefone alternativo:</label>
                        <input type="tel" value={infos.phone1} onChange={(e) => changeInfos({...infos,phone1:e.target.value})} placeholder="(xx)xxxx-xxxx" required></input>
                    </div>
                </div>
                <div className="sectionFormTitle">
                    <h2>Descrição do serviço</h2>
                </div>
                <div className="boxFormRepairDuplo">
                    <div className="boxFormRepairDuploItem">
                        <label>Tipo de dispositivo:</label>
                        <input type="text" onChange={(e) => changeInfos({...infos,device:e.target.value})} placeholder="Celular" required></input>
                    </div>
                    <div className="boxFormRepairDuploItem">
                        <label>Marca/modelo:</label>
                        <input type="text" onChange={(e) => changeInfos({...infos,brand:e.target.value})} placeholder="Samsung Galaxy S20" required></input>
                    </div>
                    <div className="boxFormRepairDuploItem">
                        <label>Tempo de uso:</label>
                        <input type="text" onChange={(e) => changeInfos({...infos,usageTime:e.target.value})} placeholder="2 anos e 3 meses" required></input>
                    </div>
                    <div className="boxFormRepairDuploItem">
                        <label>Breve descrição:</label>
                        <input type="text" onChange={(e) => changeInfos({...infos,shortDesc:e.target.value})} placeholder="Bateria viciada" required></input>
                    </div>
                    <div className="boxFormRepair">
                        <label>Descrição detalhada:</label>
                        <textarea rows="6" onChange={(e) => changeInfos({...infos,desc:e.target.value})} required></textarea>
                    </div>
                </div>
                <div className="boxFormRepair">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
        </>
    )
}