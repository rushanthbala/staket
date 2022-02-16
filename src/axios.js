import axios from "axios";

const instance = axios.create({
    baseURL:"https://staketapi.moodfor.codes/lots",
    withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',  
          'Accept': "application/json" 
      }
})

export default instance;