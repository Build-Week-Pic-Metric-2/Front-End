import axios from "axios" 
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://picmetric1.herokuapp.com';
export const axiosWithAuth = axios;

export function getToken() {
    return localStorage.getItem("token")
}



// export default function() {
//    return axios
//     .create ({
//         baseURL: 'https://picmetric1.herokuapp.com/',
        
       
//     })
// }