import { useParams } from 'react-router-dom';
import Input from '../components/Input'
import FormsButton from '../components/FormsButton'
import styled from 'styled-components'

export default function NewTransaction(){
    const value = useParams().value;
    function getText(){
        if (value > 0){
            return 'entrada'
        }
        else {
            return 'saída'
        }
    }

    return(
        <NewTransactionBox>
            <Text>Nova {getText()}</Text>
            <Forms>
                <Input type='number' placeholder='Valor'/>
                <Input type='text' placeholder='Descrição'/>
            </Forms>
            <FormsButton text={'Salvar '+getText()}/>
        </NewTransactionBox>
    )
}

const NewTransactionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Text = styled.div`
    color: white;
    font-weight: 700;
    font-size: 26px;
    user-select: none;
    text-align: left;
    margin-top: 29px;
    margin-bottom: 40px;
    width: 326px;
`
const Forms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 129px;
    justify-content: space-between;
`