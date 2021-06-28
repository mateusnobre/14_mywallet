import { useState } from 'react'
import Input from './Input'
import styled from 'styled-components'
import FormsButton from '../components/FormsButton'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


export default function SignUpForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const history = useHistory();

    function trySignUp(event){
        event.preventDefault();
        if (!email || !password || !passwordCheck || !name) {
          alert("Prencha os campos");
        }
        else {
            if (password !== passwordCheck){
                alert('As senhas não são iguais')
            }
            else {
                const response =  axios.post('http://localhost:4000/sign-up', {
                name: name,
                email: email,
                password: password
                })
                .then(() => {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user', JSON.stringify(response.name));
                    history.push('/login');
                })
            }
        }
    }
    return(
        <SignUpFormBox>
            <form onSubmit={trySignUp}>
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