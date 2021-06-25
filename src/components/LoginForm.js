import Input from './Input'
import styled from 'styled-components'

export default function LoginForm(){
    return(
        <LoginFormBox>
            <Input type='email' placeholder='E-mail'/>
            <Input type='password' placeholder='Senha'/>
        </LoginFormBox>
    )
}

const LoginFormBox = styled.div`
    display: flex;
    height: 129px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`