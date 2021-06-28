import styled from "styled-components"

export default function Transaction(props){
    return(
        <TransactionBox>
            <AuxBox>
                <Date>{props.date}</Date>
                <Description>{props.description}</Description>
            </AuxBox>
            <Value value={props.value}>{props.value}</Value>
        </TransactionBox>
    )
}

const TransactionBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 12px;
    margin-top: 23px;
    margin-right: 12px;
`
const AuxBox= styled.div`
    display: flex;
    justify-content: flex-start;
`

const Date = styled.div`
    color: #C6C6C6;
    font-size: 16px;
    margin-right: 5px;
`

const Description = styled.div`
    color: black;
    font-size: 16px;
`

const Value = styled.div`
    color: ${props => props.value > 0 ? '#03AC00' : '#C70000'};
    font-size: 16px
`
