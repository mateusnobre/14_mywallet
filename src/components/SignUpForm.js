import { useState } from 'react'
import Input from './Input'
import styled from 'styled-components'
import FormsButton from '../components/FormsButton'

export default function SignUpForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    function signUp(){
        return 1
    }
    return(
        <SignUpFormBox>
            <form onSubmit={signUp}>
                <Input type='text' placeholder='Nome' input={name} setInput={setName}/>
                <Input type='email' placeholder='E-mail' input={email} setInput={setEmail}/>
                <Input type='password' placeholder='Senha' input={password} setInput={setPassword}/>
                <Input type='password' placeholder='Confirme a senha' input={passwordCheck} setInput={setPasswordCheck}/>
                <FormsButton text='Cadastrar'/>
            </form>
        </SignUpFormBox>
    )
}

const SignUpFormBox = styled.div`
    display: flex;
    height: 330px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`