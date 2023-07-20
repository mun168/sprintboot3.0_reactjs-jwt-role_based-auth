import axios from "axios"
import authHeader  from "./authHeader"


const API_URL = "http://localhost:8080/api/test";

const getHome =()=>{
    return axios.get(API_URL+"all")

}

const getUser = () =>{
    return axios.get(API_URL + "user", { headers: authHeader() })
}

const getModerator = () =>{
    return axios.get(API_URL + "mod", { headers: authHeader() })
}

const getAdmin = () =>{
    return axios.get(API_URL + "admin", { headers: authHeader() })
}


const DataService = {
    getAdmin,
    getHome,
    getModerator,
    getUser
}


export default DataService;