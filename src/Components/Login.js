import React, {useState} from 'react';

import api from "../helpers/api";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

const Login = (props) => {
    const [error, setError] = useState();
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    
    const handleChange = e =>{
    setData({
        ...data,       
        [e.target.name]: e.target.value
    })  
}
const handleSubmit = e => {
    e.preventDefault();
    api()
    .post("api/auth/login", data)
    .then(response => {
        console.log(response);
        sessionStorage.setItem("username", response.data.username);
        localStorage.setItem("token", response.data.id)
        props.history.push('/account')
    })
    .catch(error => {
        setError(error.response)
    })
}

return(
    <form className="container" onSubmit={handleSubmit}>
        <h2>Please Sign In!</h2>
        <div className="login">
//             {error && <div className="error">{error}</div>}
            <TextField style={{marginBottom: '2%'}} type="text" name='username' placeholder="User Name" value={data.username} onChange={handleChange}/>
            <TextField style={{marginBottom: '2%'}} type='password' name='password' placeholder='password' value={data.password} onChange={handleChange}/>
            <Button variant="contained" className="alt-button" type="submit">Sign In</Button>
        </div>
    </form>
)

}
export default Login;