import Input from './Input'
import FormsButton from '../components/FormsButton'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

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
            axios.post('http://localhost:4000/login', {
                email: email,
                password: password
            }, config)
            .then((res) => {
                if (res.status === 201){
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.name));
                    history.push('/');
                }})
            .catch (() => {
                alert("E-mail ou senha incorretos")
            })
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