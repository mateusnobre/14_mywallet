import Input from './Input'
import FormsButton from '../components/FormsButton'
import styled from 'styled-components'
import { useState } from 'react'

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function login(){
        return 1
    }
    return(
        <LoginFormBox>
            <form onSubmit={login}>
                <Input type='email' placeholder='E-mail' input={email} setInput={setEmail}/>
                <Input type='password' placeholder='Senha' input={password} setInput={setPassword}/>
                <FormsButton text='Entrar'/>
            </form>
        </LoginFormBox>
    )
}

const LoginFormBox = styled.div`
    display: flex;
    height: 188px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`