import React, {useEffect, useState, useCallback} from "react"

import api from "../../services/api"
import List from "../List"
import {Container} from "./styles"

const positionsTransactions = {
  "installment_credit": 0,
  "credit": 1,
  "debit": 2
}

const transactions = [
  {
    title: "Aguardando pagamento",
    creatable: true,
    cards: []
  },
  {
    title: "Pagamento",
    creatable: false,
    cards: []
  },
  {
    title: "Recebido",
    creatable: false,
    cards: []
  }
]

export default function Board(){
  const [listTransactions, setListTransactions] = useState([])

  const loadTransactions = useCallback(async () => {
    
    const {data} = await api.get('transaction');
    
    data.map(transaction => {
      let card = {
        ...transaction
      }
      const type = transaction.type

      transaction.received.forEach(received => {
        card = {
          ...card,
          received
        }

        if(received.status === 'received'){
          let index = positionsTransactions['debit']
          transactions[index].cards.push(card)
        } else {
          let index = positionsTransactions[type]
          transactions[index].cards.push(card)
        }
      })

      return true
    })

    setListTransactions(transactions);
  }, [])
  
  useEffect(() => {
    loadTransactions();
  }, [loadTransactions])

  return (
    <Container>
      {listTransactions.map((list, index) => <List key={list.title} listIndex={index} data={list} />)}
    </Container>
  )
}