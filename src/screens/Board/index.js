import React, {useEffect, useCallback} from "react"
import { useDispatch, useSelector } from "react-redux"

import api from "../../services/api"
import List from "../../components/List"
import {Container} from "./styles"
import * as TransactionAction from "../../store/modules/transaction/actions"
import Header from "../../components/Header"

export default function Board(){
  const dispacth = useDispatch();
  const transactions = useSelector(state => state.transactions);

  const loadTransactions = useCallback(async () => {
    
    const {data} = await api.get('transaction');
    
    data.forEach(transaction => {

      dispacth(TransactionAction.addTransaction(transaction))
    })
  }, [dispacth])
  
  useEffect(() => {
    loadTransactions();
  }, [loadTransactions])

  return (
    <>
    <Header />
    <Container>
      {transactions.map((list, index) => <List key={list.title} listIndex={index} data={list} />)}
    </Container>
    </>
  )
}