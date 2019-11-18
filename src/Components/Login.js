import React, {useState} from 'react';
import api from "../helpers/api";


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
    .post("/login", data)
    .then(response => {
        localStorage.setItem("token", response.data.payload)
        props.history.push('/account')
    })
    .catch(error => {
        setError(error.response.data.message)
    })
}

return(
    <form onSubmit={handleSubmit}>
        <h2>Please Login</h2>
        <div className="login">
        {error && <div className="error">{error}</div>}
        <input type="text" name='username' placeholder="User Name" value={data.username} onChange={handleChange}/>
        <input type='password' name='password' placeholder='password' value={data.password} onChange={handleChange}/>
        <button className="button" type="submit">Sign In</button>
        </div>
    </form>
)

}
export default Login;