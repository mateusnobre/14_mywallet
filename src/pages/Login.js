import Logo from '../components/Logo'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import FormsButton from '../components/FormsButton'
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [block, setBlock] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const { token, setToken } = useContext(TokenContext);
    const history = useHistory();

    if(localStorage.getItem('token')){
      history.push('/');
    }

    return(
        <LoginBox>
            <Logo/>
            <LoginForm/>
            <FormsButton text='Entrar'/>
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
    font-weight: 700;
    color: white;
`