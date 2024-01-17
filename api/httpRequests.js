import axios from "axios"
const BASE_URL = "https://farawin.iran.liara.run"
export const register=(username,password,name)=>{
  return axios.post(`${BASE_URL}/api/user`,{
    username,
    password,
    name
    })
}
export const login=(username,password)=>{
  return axios.post(`${BASE_URL}/api/user/login`,{
    username,
    password
  })
}
export const addContact=(token,username,name)=>{
  return axios.post(`${BASE_URL}/api/contact`,{
    username,
    name
  },{
    headers:{
      "authorization":token
    }
  })
}
export const getContacts=(token)=>{
  return axios.get(`${BASE_URL}/api/contact`,{
    headers:{
      "authorization":token
    }
  })
}