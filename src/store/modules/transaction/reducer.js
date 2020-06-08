import produce from "immer"

const positionsTransactions = {
  "installment_credit": 0,
  "credit": 1,
  "debit": 2
}

const transactionsInitial = [
  {
    title: "Aguardando pagamento",
    cards: []
  },
  {
    title: "Pagamento",
    cards: []
  },
  {
    title: "Recebido",
    cards: []
  }
]

export default function transactions(state=transactionsInitial, action){

  switch(action.type){
    case 'ADD_TRANSACTION': {
      return produce(state, draft => {
        const receiveds = action.transaction.received.filter(received => received.status !== 'received');

        if(receiveds.length){
            const type = action.transaction.type
            let index = positionsTransactions[type]
            draft[index].cards.push(action.transaction)
        } else {
          let index = positionsTransactions['debit']
          draft[index].cards.push(action.transaction)
        }
      })
    }

    case 'DESTROY_TRANSACTION': {
      return produce(state, draft => {
        const {id, listIndex} = action.payload

        const index = draft[listIndex].cards.findIndex(card => card._id === id)
        
        if(index >=0 ){
          draft[listIndex].cards.splice(index, 1)
        }
      })
    }

    case 'MOVE_CARD_TRANSACTION': {
      return produce(state, draft => {
        const { fromList, toList, from, to } = action;
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged)
      })
    }

    case 'UPDATE_CARD_TRANSACTION': {
      return produce(state, draft => {
        let listIndex = "";
        let cardIndex = ""
        const {_id} = action.transaction

        draft.forEach((stateTransactions, index) => {
          stateTransactions.cards.forEach((transaction, indexTransaction) => {
            if(transaction._id === _id){
              console.log("entrou")
              listIndex = index
              cardIndex = indexTransaction
            }
          })
        })

        draft[listIndex].cards.splice(cardIndex, 1)
        
        const receiveds = action.transaction.received.filter(received => received.status !== 'received');

        if(receiveds.length){
            const type = action.transaction.type
            let index = positionsTransactions[type]
            draft[index].cards.push(action.transaction)
        } else {
          let index = positionsTransactions['debit']
          draft[index].cards.push(action.transaction)
        }
      })
    }
    
    default:
      return state
  }
}