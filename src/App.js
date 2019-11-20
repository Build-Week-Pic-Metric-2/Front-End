import React from 'react';
import './App.css';
import ProtectedRoute from "./helpers/ProtectedRoute"
import Login from "./Components/Login"
import Account from "./Components/Account"
import { Route } from 'react-router-dom'
import Logout from "./Components/Logout"
import Nav from "./Components/Navigation"
// import Header from './Components/Header'
import WelcomePage from './Components/WelcomePage'
import Register from './Components/Register'
import Form from './Components/AltForm/form'
import EditPic from "./Components/EditPic"


export default function App() {

  return (
      <section>
        {/*<Header />*/}

       <Nav />
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/register" component={Register}/>
        {/* <Route path="/alternate" component={Form} /> */}
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/account" component={Account}/>
        <ProtectedRoute exact path='/logout' component={Logout} />
        <ProtectedRoute exact path='/edit-pic' component={EditPic} />

      </section>
  )

}
