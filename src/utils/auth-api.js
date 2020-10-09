import axios from 'axios'

const login = async (user) => {
    const result = await axios.post('http://localhost:5000/auth/signin', user)
    return result
}

const register = async (user) => {
    const result = await axios.post('http://localhost:5000/auth/signup', user)
    return result
}

const check = async (token) => {
    const result = await axios.post('http://localhost:5000/tokenIsValid', null, {headers: {'x-auth-token': token}})
    return result
}

const checkUser = async (token) => {
    const result = await axios.get('http://localhost:5000/', {headers: {'x-auth-token': token}})
    return result
}

const deleteUser = async (user) => {
    const result = await axios.delete('http://localhost:5000/delete', user._id)
    return result
}

const changeDataProfile = async (user) => {
    const result = await axios.post('http://localhost:5000/changeInfos', user)
    return result
}

const saveCallService = async (info) => {
    const result = await axios.post('http://localhost:5000/saveCallService', info)
    return result
}

const getCallService = async (user) => {
    const result = await axios.get('http://localhost:5000/getCallService', {headers: {user: user}})
    return result
}

export {login,register,check,checkUser,deleteUser,changeDataProfile,saveCallService,getCallService}