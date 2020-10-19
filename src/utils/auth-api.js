import axios from 'axios'

const login = async (user) => {
    const result = await axios.post('https://reactjsthiagoapi.herokuapp.com/auth/signin', user)
    return result
}

const register = async (user) => {
    const result = await axios.post('https://reactjsthiagoapi.herokuapp.com/auth/signup', user)
    return result
}

const check = async (token) => {
    const result = await axios.post('https://reactjsthiagoapi.herokuapp.com/tokenIsValid', null, {headers: {'x-auth-token': token}})
    return result
}

const checkUser = async (token) => {
    const result = await axios.get('https://reactjsthiagoapi.herokuapp.com/', {headers: {'x-auth-token': token}})
    return result
}

const deleteUser = async (user) => {
    const result = await axios.delete('https://reactjsthiagoapi.herokuapp.com/delete', {headers:{"x-auth-token":user.token,user:user.id}})
    return result
}

const changeDataProfile = async (user) => {
    const result = await axios.post('https://reactjsthiagoapi.herokuapp.com/changeInfos', user)
    return result
}

const saveCallService = async (info) => {
    const result = await axios.post('https://reactjsthiagoapi.herokuapp.com/saveCallService', info)
    return result
}

const getCallService = async (user) => {
    const result = await axios.get('https://reactjsthiagoapi.herokuapp.com/getCallService', {headers: {user: user}})
    return result
}

const deleteCall = async (call) => {
    const result = await axios.delete('https://reactjsthiagoapi.herokuapp.com/deleteCall', {headers:{"x-auth-token":call.token,call:call.id}})
    return result
}

export {login,register,check,checkUser,deleteUser,changeDataProfile,saveCallService,getCallService,deleteCall}