import styled from 'styled-components'
import { BsPlusCircle } from 'react-icons/bs'
import { FiMinusCircle } from 'react-icons/fi'

export default function NewTransactionButton(props){
    if (props.text === 'entrada'){
        return(
            <NewTransactionButtonBox>
                <BsPlusCircle color='white' size='22px'/>
                <Text>
                    <Text>Nova</Text>
                    <Text>{props.text}</Text>
                </Text>
            </NewTransactionButtonBox>
        )
    }
    else if (props.text === 'saída'){
        return(
            <NewTransactionButtonBox>
                <FiMinusCircle color='white' size='22px'/>
                <Text>
                    <Text>Nova</Text>
                    <Text>{props.text}</Text>
                </Text>
            </NewTransactionButtonBox>
        )
    }
}

const NewTransactionButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`

const Text = styled.div`
    color: white;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
`