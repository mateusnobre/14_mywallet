import Logo from '../components/Logo'
import styled from 'styled-components'
import SignUpForm from '../components/SignUpForm'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <LoginBox>
            <Logo/>
            <SignUpForm/>
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
    margin-top: 36px;
    color: white;
`