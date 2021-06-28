import styled from 'styled-components'
import Transaction from './Transaction'
import * as api from '../services/api/transactions'
import { useState, useEffect } from "react";

export default function TransactionFeed(){
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      api.list().then(transactions => {
        setTransactions(transactions.map(t => ({ value: t.value, description: t.description, date: t.created_at })));
      }).catch(err => {
      })
    }, []);

    function getSum(total, num) {
      return total + Math.round(100*num)/100;
    }
    return(
        <TransactionFeedBox>
            {transactions.map((t) => (
              <Transaction
                value={t.value}
                description={t.value}
                date={t.date}
              />
            ))}
            <Text>SALDO</Text>
            <Funds>R$ {transactions.map((t) => (t.value)).reduce(getSum, 0)} </Funds>
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
    height: 63vh;
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