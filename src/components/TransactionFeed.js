import styled from 'styled-components'
export default function TransactionFeed(){
    return(
        <TransactionFeedBox>
            Não há registros de entrada ou saída
        </TransactionFeedBox>
    )
}

const TransactionFeedBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    line-height: 24px;
    font-size: 20px;
    color: #868686;
    text-align: center;
    width: 87%;
    height: 66vh;
    border-radius: 5px;
`