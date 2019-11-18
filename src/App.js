import React, { useState, useEffect } from 'react';
import './App.css';
import ProtectedRoute from "./helpers/ProtectedRoute"
import Login from "./Components/Login"
// import {getToken} from "./helpers/api"
import Account from "./Components/Account"

import { Route } from 'react-router-dom'

import Logout from "./Components/Logout"
import Nav from "./Components/Navigation"
// import Header from './Components/Header'
import WelcomePage from './Components/WelcomePage'
// import Login from './Components/Login'
import Register from './Components/Register'
// import { NavLink, Link } from "react-router-dom";


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

       <Nav />


        <Route exact path="/" component={WelcomePage}/>
        <Route path="/register" component={Register}/>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/account" component={Account}/>
        <ProtectedRoute exact path='/logout' component={Logout} />

      </section>
  )

}
