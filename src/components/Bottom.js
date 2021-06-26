import NewTransactionButton from './NewTransactionButton'
import styled from 'styled-components'

export default function Bottom(){
    return(
        <BottomBox>
            <NewTransactionButton text='entrada' signal='+'/>       
            <NewTransactionButton text='saída' signal='-'/>       
        </BottomBox>
    )
}

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 87%;
    margin-top: 13px;
    margin-bottom: 16px;
    > * { 
        &:not(:first-child) {
        margin-left: 15px;
        }
    }
`