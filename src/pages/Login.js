import Logo from '../components/Logo'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import { Link } from "react-router-dom";
import React, { history } from "react";

export default function Login() {
    return(
        <LoginBox>
            <Logo/>
            <LoginForm/>
            <Link to='/sign-up' style={{ textDecoration: 'none'}}>
                <SignUpShortcut>
                    Primeira vez? Cadastre-se!
                </SignUpShortcut>
            </Link>
        </LoginBox>
    )
}

const LoginBox = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SignUpShortcut = styled.div`
    margin-top: 36px;;
    font-weight: 700;
    color: white;
`