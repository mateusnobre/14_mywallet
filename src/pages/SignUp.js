import Logo from '../components/Logo'
import styled from 'styled-components'
import SignUpForm from '../components/SignUpForm'
import FormsButton from '../components/FormsButton'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <LoginBox>
            <Logo/>
            <SignUpForm/>
            <FormsButton text='Cadastrar'/>
            <Link to='/login' style={{ textDecoration: 'none'}}>
                <LoginShortcut>
                    Já tem uma conta? Entre agora!
                </LoginShortcut>
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
const LoginShortcut = styled.div`
    font-weight: 700;
    color: white;
`