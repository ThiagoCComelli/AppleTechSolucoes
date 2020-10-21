import React, { useState, useContext } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { notification } from '../../utils/middlewareNotifications'
import UserContext from '../../context/UserContext'

import '../styles/Navbar.css'



function Navbar(){
    const history = useHistory()
    const {userData,setUserData} = useContext(UserContext)
    const [menuNav,setMenuNav] = useState({
        open: false
    })

    const logout = () => {
        setUserData({
            token: undefined,
            user: false
        })

        notification({title:"Logout com sucesso!",message:"Até a próxima, esperamos que sua experiência tenha sido boa.",type:"success"})
        localStorage.setItem('auth-token','')

        history.push("/")
    }

    const Menu = ({menuNav,setMenuNav}) => {
        const {userData} = useContext(UserContext)
    
        return(
            <>
            <div className="menu">
                <div><Link to="/services" onClick={() => setMenuNav({open:!menuNav.open})}>Serviços</Link></div>
                {userData.user ? <div><Link to="/profile" onClick={() => setMenuNav({open:!menuNav.open})}>Perfil</Link></div> : null}
                {!userData.user ? 
                    <div><Link to="/login" onClick={() => setMenuNav({open:!menuNav.open})}>Entrar</Link></div> : 
                    <div><Link to='/' onClick={() => {
                        setMenuNav({open:!menuNav.open})
                        logout()}}>Sair</Link></div>}
                {userData.user.userType === "admin" ? <div><Link to="/call-page-admins" onClick={() => setMenuNav({open:!menuNav.open})}>Chamados</Link></div> : null}
            </div>
            </>
        )
    }

    return (
        <>
        <nav className="nav" id="nav">
            <Link to="/" onClick={() => setMenuNav({open:false})}>
                <img src={`${process.env.PUBLIC_URL}/images/apple.png`} alt="Apple Logo"/>
            </Link>
            <button className="collapse" onClick={() => {setMenuNav({open:!menuNav.open})}}>{menuNav.open ? "Fechar Menu" : "Menu"}</button>
            <ul className="navlinks">
                { userData.user.userType === "admin" ? <li><Link to="/call-page-admins">Chamados</Link></li> : null}
                <li><Link to="/services">Serviços</Link></li>
                { userData.user ? <li><Link to="/profile">Perfil</Link></li> : null}
                { !userData.user ? <li><Link to="/login">Entrar</Link></li>   : <li onClick={logout}><Link to='/'>Sair</Link></li>}
            </ul>
            { menuNav.open ? <Menu menuNav={menuNav} setMenuNav={setMenuNav}/> : null }
        </nav>
        <div className="products">
            {/* <ul className="navlinks">
                <li><Link to="/mac">Mac</Link></li>
                <li><Link to="/ipad">iPad</Link></li>
                <li><Link to="/iphone">iPhone</Link></li>
            </ul> */}
        </div>
        </>
    )
    
}

export default Navbar