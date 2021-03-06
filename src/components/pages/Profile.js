import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import { changeDataProfile, check, checkUser, deleteUser } from '../../utils/auth-api'
import { notification } from '../../utils/middlewareNotifications'
import '../styles/Profile.css'
import '../styles/RepairForm.css'

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
                notification({title:"Mudanças efetuadas com sucesso!",message:"As mudanças ja foram registradas no banco de dados, e estão validas.",type:"success"})
                history.push('/')
            } else {
                notification({title:"Falha para efetuar as mudanças na conta!",message:"Problema interno no banco de dados, tente novamente mais tarde.",type:"danger"})
                setUserData({user: false})
            }
        }
    }

    const deleteCallFunc = async () => {
        const res = await deleteUser({id:userData.user._id, token:userData.token})
        if(res){
            notification({title:"Conta deletada com sucesso!",message:"Operação realizada com sucesso.",type:"success"})
            setUserData({
                token: undefined,
                user: false
            })
            history.push('/')
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
            <button onClick={deleteCallFunc}>Excluir perfil</button>
        </div>
        </>
    )
}