import React, {useEffect, useCallback} from "react"
import { useDispatch, useSelector } from "react-redux"
import io from "socket.io-client"

import api from "../../services/api"
import List from "../../components/List"
import {Container} from "./styles"
import * as TransactionAction from "../../store/modules/transaction/actions"
import Header from "../../components/Header"

export default function Board(){
  const dispacth = useDispatch();
  const transactions = useSelector(state => state.transactions);

  const registerConnectionIO = useCallback(async () => {
    const socket = io("http://localhost:3333")

    socket.on('create.transaction', transaction => {
      dispacth(TransactionAction.addTransaction(transaction))
    })

    socket.on('update.transaction', transaction => {
      dispacth(TransactionAction.updateTransaction(transaction))
    })

    const {data} = await api.get('transaction');
    data.forEach(transaction => {
      dispacth(TransactionAction.addTransaction(transaction))
    })

  }, [dispacth])

  useEffect(() => {
    registerConnectionIO();
  }, [registerConnectionIO])

  return (
    <>
    <Header />
    <Container>
      {transactions.map((list, index) => <List key={list.title} listIndex={index} data={list} />)}
    </Container>
    </>
  )
}