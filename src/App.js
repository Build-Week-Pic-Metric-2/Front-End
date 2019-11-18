import React, { useState } from 'react';
import './App.css';
import ProtectedRoute from "./helpers/ProtectedRoute"

import { Route } from 'react-router-dom'
import { Button, Row } from 'reactstrap'
// import Header from './Components/Header'
import WelcomePage from './Components/WelcomePage'
// import Login from './Components/Login'
import Register from './Components/Register'


export default function App(props) {
  const [refresh, setRefresh] = useState(false);
  const [getUrl, setGetUrl] = useState(``);

  const changeHandler = e => {
    props.history.push("/r");
    setGetUrl("https://picmetric1.herokuapp.com/" + e.target.id);
    setRefresh(!refresh)
  };




  return (
      <body>
        {/*<Header />*/}
        <Row>
          <Button onClick={() => {props.history.push("/")}}>Home</Button>
          <Button id="Register" onClick={changeHandler}>Register</Button>
          <Button id="Login" onClick={changeHandler}>Login</Button>
        </Row>

        <Route exact path="/" component={WelcomePage}/>

        {/*<Route path="/login" render={props => <Login {...props} refresh={refresh} getUrl={getUrl}/>}/>*/}
        <Route path="/register" render={props => <Register {...props} refresh={refresh} getUrl={getUrl}/>}/>

      </body>
  )

}
