import React from 'react';
import { Row } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import {getToken} from "../helpers/api";
import styled, { css } from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: .5rem 0;
  margin: .5rem 1rem;
  width: 10rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-align: center;
  font-size: 1.5rem;
    text-decoration: none;
  :hover{
  background: lightgrey;
  },
  
  ${props =>
    props.primary && css`
      background: white;
      color: black;
    `};  
`;

function Nav() {

  const signedIn = getToken();

  return (
  <Row>
    <Button href='/' primary styled='text-decoration:none'><NavLink className="link" to="/">Home</NavLink></Button>

    <Button href='/register'> <NavLink className="link" to="/register">Register</NavLink> </Button>
        {!signedIn && <Button href='login'> <Link className="link" to="/login">Login</Link></Button>}
         {signedIn && <Button href='/account'><Link className="link" to="/account">Account</Link></Button>}
         {signedIn && <Button href='/logout'> <Link className="link" to="/logout">Logout</Link></Button>}
  </Row>
  )
}
export default Nav;