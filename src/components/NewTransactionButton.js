import styled from 'styled-components'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function NewTransactionButton(props){
    if (props.text === 'entrada'){
        return(
            <NewTransactionButtonBox>
                <Link style={{textDecoration : 'none'}} to='/new-transaction/1'>
                    <HiOutlinePlusCircle color='white' size='30px'/>
                    <Text>
                        <Text>Nova</Text>
                        <Text>{props.text}</Text>
                    </Text>
                </Link>
            </NewTransactionButtonBox>
        )
    }
    else if (props.text === 'saída'){
        return(
            <NewTransactionButtonBox>
                <Link style={{textDecoration : 'none'}} to='/new-transaction/-1'>
                    <HiOutlineMinusCircle color='white' size='30px'/>
                    <Text>
                        <Text>Nova</Text>
                        <Text>{props.text}</Text>
                    </Text>
                </Link>
            </NewTransactionButtonBox>
        )
    }
}

const NewTransactionButtonBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    :hover{
        opacity: 0.8;
    }
`

const Text = styled.div`
    user-select: none;
    color: white;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
`