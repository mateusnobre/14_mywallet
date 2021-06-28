import Header from '../components/Header'
import TransactionFeed from '../components/TransactionFeed'
import Bottom from '../components/Bottom'
import styled from 'styled-components'
export default function Home() {
    return(
        <HomeBox>
            <Header/>
            <TransactionFeed/>
            <Bottom/>
        </HomeBox>
    )
}

const HomeBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`
