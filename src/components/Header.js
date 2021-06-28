import styled from 'styled-components'
import { IoExitOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom'
export default function Header(props){
    return(
        <HeaderBox>
            <WelcomeText>Olá, Fulano</WelcomeText>        
            <Link to ='/login' style={{textDecoration: 'none'}}><IoExitOutline color='white'size='24px'/></Link>
        </HeaderBox>
        )
}

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 87%;
    margin-top: 25px;
    margin-bottom: 26px;
`
const WelcomeText = styled.div`
    color: white;
    font-weight: 700;
    font-size: 26px;
    user-select: none;
`