import React from 'react';
import { Button, Row } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import {getToken} from "../helpers/api"


function Nav() {

  const signedIn = getToken();

  return (
  <Row>
    <Button>
     <NavLink to="/">Home</NavLink>
    </Button>

    <Button> <NavLink to="/register">Register</NavLink> </Button>       
        {!signedIn && <Button> <Link to="/login">Login</Link></Button>}    
         {signedIn && <Button><Link to="/account">Account</Link></Button>}       
         {signedIn && <Button> <Link to="/logout">Logout</Link></Button>}
  </Row>
  )
}
export default Nav;