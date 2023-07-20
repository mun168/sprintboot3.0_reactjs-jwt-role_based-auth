import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/auth"



const register = (user) => {
    return axios.post(BASE_URL + "/signup",user)
}

const login = async (user)=> {
    const response = await axios.post(BASE_URL + "/signin", user);
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
  };

const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem("user"))
}


const authService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default authService;