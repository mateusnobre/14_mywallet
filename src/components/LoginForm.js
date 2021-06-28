import Input from './Input'
import FormsButton from '../components/FormsButton'
import styled from 'styled-components'
import { useState } from 'react'
import login from   '../services/api/login'
import { useHistory } from 'react-router-dom'

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    function tryLogin(event){
        event.preventDefault();        
        if (!email || !password) {
          alert("Prencha os campos");
        }
        else {
            const loginResult = login(email, password)
            if (loginResult) {
                history.push('/');
            }
            else {
                alert("E-mail ou senha incorretos")
            
            }
        }
    }
    return(
        <LoginFormBox>
            <form onSubmit={tryLogin}>
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