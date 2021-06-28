import { useParams, useHistory } from 'react-router-dom';
import Input from '../components/Input'
import FormsButton from '../components/FormsButton'
import styled from 'styled-components'
import * as api from '../services/api/transactions'
import { useState } from 'react';

export default function NewTransaction(){
    const transactionType = useParams().value;
    const history = useHistory();
    const [value, setValue] = useState(0);
    const [comment, setComment] = useState("");
    function getText(){
        if (transactionType > 0){
            return 'entrada'
        }
        else {
            return 'saída'
        }
    }
    function postTransaction(event){
        if (!value || !comment) {
          alert("Prencha os campos");
        }
        else {
            if(transactionType > 0){
                const transactionResult = api.makeTransaction(value, comment)
                if (transactionResult) {
                    history.push('/');
                }
                else {
                    alert("Não foi possível processar a transação")
                }
            }
            else {
                const transactionResult = api.makeTransaction(-value, comment)
                if (transactionResult) {
                    history.push('/');
                }
                else {
                    alert("Não foi possível processar a transação")
                }
            }
        }

    }
    return(
        <NewTransactionBox>
            <Text>Nova {getText()}</Text>
            <TransactionForms>
                <form onSubmit={postTransaction}>
                    <Input input = {value} setInput={setValue} type='number' placeholder='Valor'/>
                    <Input input = {comment} setInput={setComment} type='text' placeholder='Descrição'/>
                    <FormsButton text={'Salvar '+getText()}/>
                </form>
            </TransactionForms>
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
const TransactionForms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 188px;
    justify-content: space-between;
    margin-bottom: 13px;
`