import axios from "axios";


const getAuth = () => {
    return(
    "Client-ID 472e3a06f25de060dfa4947f4c9c112ee69e46d7969a7cc4ae28c86ebe863f52"
    )
}

export default function() {
   return axios
    .create ({
        baseURL: 'https://api.unsplash.com/',
        headers: {
            Authorization: getAuth()
        }
    })
}