import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UseContext from '../../context/UserContext'
import { notification } from '../../utils/middlewareNotifications'
import { login } from '../../utils/auth-api'
import './Login.css'


function Login(props){
    const history = useHistory()
    const {userData, setUserData} = useContext(UseContext)
    const [infos,changeInfos] = useState({
        email: "",
        password: ""
    })

    const handleSignin = async (e) => {
        e.preventDefault()
        const loginRes = await login(infos)
        if(!loginRes.data.auth){
            notification({title:"Falha para entrar na conta.",message:"Usuário nao encontrado ou credenciais erradas",type:"danger"})
            return
        }
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        })
        localStorage.setItem('auth-token',loginRes.data.token)
    }

    if(userData.user){
        history.push('/')
        notification({message:"Login efetuado com sucesso.",title:"Bem vindo ao AppleTech Solucoes!",type:"success"})
    } 

    return(
        <>
            <div className="loginGeral">
                <form onSubmit={handleSignin} className="loginForm" noValidate> 
                    <div className="loginTitle">
                        <h4>Login</h4>
                    </div>
                    <div className="loginPasswdEmail">
                        <label>Email:</label>
                        <input type="email" onChange={(e) => changeInfos({...infos,email:e.target.value})} placeholder="Coloque seu email" required></input>
                    </div>
                    <div className="loginPasswdEmail">
                        <label>Senha:</label>
                        <input type="password" onChange={(e) => changeInfos({...infos,password:e.target.value})} placeholder="Coloque sua senha" required></input>
                    </div>
                    <div className="loginBtn">
                        <button type="submit">Entrar</button>
                    </div>
                    <div className="loginUtils">
                        <p>Esqueceu a senha?</p>
                        <Link to="/register"><p>Registre uma conta!</p></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login