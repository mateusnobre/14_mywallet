import Logo from '../components/Logo'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import FormsButton from '../components/FormsButton'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <LoginBox>
            <Logo/>
            <LoginForm/>
            <FormsButton text='Entrar'/>
            <Link to='/sign-up'>
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