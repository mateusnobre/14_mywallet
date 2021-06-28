import styled from 'styled-components'
import Transaction from './Transaction'
import { useState, useEffect } from "react";
import axios from 'axios';
import dayjs from 'dayjs'

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

export default function TransactionFeed(){
    const [transactions, setTransactions] = useState([]);
    function loadTransactions () {
        const response = axios.get('http://localhost:4000/transactions', config);
        response.then( (res) => {
            setTransactions([...res.data])
        })
    }
    
    useEffect(loadTransactions, [transactions]);

    function getSum(total, num) {
      return total + num.toFixed(2);
    }
    return(
        <TransactionFeedBox>
            {transactions.map((t) => (
              <Transaction
                value={t.value.toFixed(2)}
                description={t.comment}
                date={dayjs(t.created_at).format('DD/MM')}
              />
            ))}
            <Text>SALDO</Text>
            <Funds sum={transactions.map((t) => (t.value)).reduce(getSum, 0)}>R$ {transactions.map((t) => (t.value)).reduce(getSum, 0)} </Funds>
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
    overflow-y: scroll;
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
    color: ${props => props.value < 0 ? '#03AC00' : '#C70000'};
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    right: 12px;
    bottom: 10px;
`