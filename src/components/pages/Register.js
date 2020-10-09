import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { register, login } from '../../utils/auth-api'
import { notification } from '../../utils/middlewareNotifications'
import UseContext from '../../context/UserContext'
import './Login.css'

function Register(){
    const history = useHistory()
    const {userData ,setUserData} = useContext(UseContext)
    const [infos,changeInfos] = useState({
        email: "",
        password: "",
        passwordAgain: ""
    })

    const handleSignin = async (e) => {
        e.preventDefault()
        if(infos.password !== infos.passwordAgain){
            notification({title:"Falha na criação!",message:"As senhas fornecidas não são iguais.",type:"danger"})
            return
        }
        const regisRes = await register(infos)
        if(regisRes.data.auth){
            const loginRes = await login({email: infos.email, password:infos.password})
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            })

            notification({title:"Conta criada com sucesso!",message:"Seja bem-vindo ao AppleTech Soluções.",type:"success"})
            localStorage.setItem('auth-token',loginRes.data.token)
        } else {
            notification({title:"Falha para criar na conta!",message:"Problema interno no banco de dados, tente novamente mais tarde.",type:"danger"})
            return
        }
    }

    if(userData.user) history.push('/')

    return (
        <>
        <div className="loginGeral">
            <form onSubmit={handleSignin} className="loginForm"> 
                <div className="loginTitle">
                    <h4>Registro</h4>
                </div>
                <div className="loginPasswdEmail">
                    <label>Email:</label>
                    <input type="email" onChange={(e) => changeInfos({...infos,email:e.target.value})} placeholder="Coloque seu email" required></input>
                </div>
                <div className="loginPasswdEmail">
                    <label>Senha:</label>
                    <input type="password" onChange={(e) => changeInfos({...infos,password:e.target.value})} placeholder="Coloque sua senha" required></input>
                </div>
                <div className="loginPasswdEmail">
                    <label>Confirme sua senha:</label>
                    <input type="password" onChange={(e) => changeInfos({...infos,passwordAgain:e.target.value})} placeholder="Coloque sua senha" required></input>
                </div>
                <div className="loginBtn">
                    <button type="submit">Cadastrar</button>
                </div>
                <div className="loginUtils">
                    <Link to="/login"><p>Ja possui uma conta?</p></Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Register
