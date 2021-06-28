import styled from 'styled-components'
import Transaction from './Transaction'
import * as api from '../services/api/transactions'
import { useState, useEffect } from "react";
import TokenContext  from '../contexts/TokenContext';

export default function TransactionFeed(){
    const [transactions, setTransactions] = useState(null);
    useEffect(() => {
      api.list().then(transactions => {
        setTransactions(transactions.map(t => ({ value: t.value, description: t.description, date: t.created_at })));
      }).catch(err => {
        alert('Não foi possível obter as transações do usuário');
      })
    }, []);


    return(
        <TransactionFeedBox>
            <Transaction value={213} description='Compra com a mamãe'  date='21/05'/>
            <Transaction value={-213} description='Compra com a mamãe'  date='21/05'/>
            <Text>SALDO</Text>
            <Funds>231.31</Funds>
        </TransactionFeedBox>
    )
}

const TransactionFeedBox = styled.div`
    position: relative;
    display: flex;
    user-select: none;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    line-height: 24px;
    font-size: 20px;
    color: #868686;
    text-align: center;
    width: 87%;
    height: 66vh;
    border-radius: 5px;
`
const Text = styled.div`
    position: absolute;
    color: black;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    left: 15px;
    bottom: 10px;
`

const Funds = styled.div`
    position: absolute;
    color: green;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    right: 12px;
    bottom: 10px;
`