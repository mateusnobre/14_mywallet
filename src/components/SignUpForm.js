
import Input from './Input'
import styled from 'styled-components'

export default function SignUpForm(){
    return(
        <SignUpFormBox>
            <Input type='text' placeholder='Nome'/>
            <Input type='email' placeholder='E-mail'/>
            <Input type='password' placeholder='Senha'/>
            <Input type='password' placeholder='Confirme a senha'/>
        </SignUpFormBox>
    )
}

const SignUpFormBox = styled.div`
    display: flex;
    height: 271px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`