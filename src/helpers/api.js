import axios from "axios";


export function getToken() {
    return localStorage.getItem("token")
}

export default function() {
   return axios
    .create ({
        baseURL: 'https://picmetric1.herokuapp.com/api/auth',
        headers: {
            Authorization: getToken();
        }
    })
}