import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Button, Row } from 'reactstrap'
// import Header from './Components/Header'
import WelcomePage from './Components/WelcomePage'
// import Login from './Components/Login'
import Register from './Components/Register'
import { NavLink } from "react-router-dom";


export default function App() {
  // const [refresh, setRefresh] = useState(false);
  // const [getUrl, setGetUrl] = useState(``);

  // useEffect(() =>
  //   {
  //
  //   },[]);

  // const changeHandlerRegistration = () => {
  //   // props.history.push("/register");
  //   setGetUrl("");
  // };

  return (
      <section>
        {/*<Header />*/}
        <Row>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
        </Row>

        <Route exact path="/" component={WelcomePage}/>
        <Route path="/register" component={Register}/>

      </section>
  )

}
