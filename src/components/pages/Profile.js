import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import { changeDataProfile, check, checkUser } from '../../utils/auth-api'
import './Profile.css'
import '../RepairForm.css'

export default function Profile(){
    const { userData, setUserData} = useContext(UserContext)
    const history = useHistory()
    const [infos,changeInfos] = useState({
        name: userData.user.name,
        email: userData.user.email,
        password: userData.user.password,
        phone0: userData.user.phone0,
        phone1: userData.user.phone1,
        _id: userData.user._id
    })

    // const logout = () => {
    //     setUserData({
    //         token: undefined,
    //         user: false
    //     })
    //     localStorage.setItem('auth-token','')
    //     history.push('/')
    // }

    const handleChanges = async (e) => {
        e.preventDefault()
        
        let token = localStorage.getItem('auth-token')
        const res = await changeDataProfile(infos)

        if(res.data){
            const tokenRes = await check(token)
            if(tokenRes.data){
                const userRes = await checkUser(token)
                setUserData({
                    token: token,
                    user: userRes.data
                })
                history.push('/')
            } else {
                setUserData({user: false})
            }
        }
    }


    return(
        <>
        <div className="center">
            <h4>Perfil</h4>
        </div>
        <div className="contentsRepair">
            <form onSubmit={handleChanges} className="formRepair" spellCheck="false">
                <div className="sectionFormTitle">
                    <h2>Dados para contato</h2>
                </div>
                <div className="boxFormRepair">
                    <label>Nome Completo:</label>
                    <input type="text" onChange={(e) => changeInfos({...infos,name:e.target.value})} value={infos.name} placeholder="Thiago Comelli"></input>
                </div>
                <div className="boxFormRepair">
                    <label>Email:</label>
                    <input type="email" onChange={(e) => changeInfos({...infos,email:e.target.value})} value={infos.email} placeholder="thiago.comelli@outlook.com"></input>
                </div>
                <div className="boxFormRepairDuplo">
                    <div className="boxFormRepairDuploItem">
                        <label>Telefone:</label>
                        <input type="tel" onChange={(e) => changeInfos({...infos,phone0:e.target.value})} value={infos.phone0} placeholder="(48)99603-0226"></input>
                    </div>
                    <div className="boxFormRepairDuploItem">
                        <label>Telefone alternativo:</label>
                        <input type="tel" onChange={(e) => changeInfos({...infos,phone1:e.target.value})} value={infos.phone1} placeholder="(xx)xxxx-xxxx"></input>
                    </div>
                </div>
                <div className="boxFormRepair">
                    <button type="submit">Confirmar mudancas</button>
                </div>
            </form>
        </div>
        </>
    )
}