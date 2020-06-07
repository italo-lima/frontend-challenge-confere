import produce from "immer"

const positionsTransactions = {
  "installment_credit": 0,
  "credit": 1,
  "debit": 2
}

const transactionsInitial = [
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
        const index = draft[action.listIndex].cards.findIndex(card => card._id === action.id)
        
        if(index >=0 ){
          draft[action.listIndex].cards.splice(index, 1)
        }
      })
    }

    case 'UPDATE_STATUS_TRANSACTION': {
      return produce(state, draft => {
        console.log(action)
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
    
    default:
      return state
  }
}