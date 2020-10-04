import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext'
import { check, checkUser } from '../../utils/auth-api' 

const PrivateRoute = ({component: Component, ...rest}) => {
    const {userData, setUserData} = useContext(UserContext)

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Route {...rest} render={props => (
            userData.user ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {path: rest.path}}} />
        )} />
    );
};

export default PrivateRoute;