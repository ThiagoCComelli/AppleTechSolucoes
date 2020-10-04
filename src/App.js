// import socketClient from 'socket.io-client'
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { check, checkUser } from './utils/auth-api'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Repair from './components/pages/Repair'
import Consult from './components/pages/Consult'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import UserContext from './context/UserContext'
import PrivateRoute from './components/pages/PrivateRoute'

import './App.css'


function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    })

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem('auth-token')
            if(token === null){
                localStorage.setItem('auth-token', '')
                token = ''
            }
            
            const tokenRes = await check(token)
            if(tokenRes.data){
                const userRes = await checkUser(token)
                setUserData({
                    token: token,
                    user: userRes.data
                })
            } else {
                setUserData({user: false})
            }
        }

        checkLoggedIn()
    }, [])

    if(userData.user === undefined) return <div className="loadingDiv"><h1>Loading...</h1></div>

    return (
        <>
        <Router>
            <UserContext.Provider value={{userData,setUserData}}>
            <ScrollToTop>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <PrivateRoute path="/services/repair" exact component={Repair} />
                    <PrivateRoute path="/services/consult" exact component={Consult} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <PrivateRoute path="/profile" exact component={Profile} />
                </Switch>
                <Footer />
            </ScrollToTop>
            </UserContext.Provider>
        </Router>
        </>
    )
}

export default App