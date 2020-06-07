import api from "../../../services/api"
import {toast} from "react-toastify"

//Com thunk
export function destroyTransaction(id, listIndex) {
  return async function(dispatch) {
    try {

      await api.delete(`transaction/${id}`)

      // dispatch(destroyTransactionBD(id, listIndex))
      dispatch({
        type:"DESTROY_TRANSACTION",
        payload: {id, listIndex}
      })

    } catch(e){
      toast.error("Erro ao deletar produto")
    }
  }
}

//Sem thunk
export function addTransaction(transaction) {
  return {
    type: "ADD_TRANSACTION",
    transaction
  }
}

export function updateTransaction(id, listIndex, status){
  return {
    type: "UPDATE_STATUS_TRANSACTION",
    id,
    listIndex,
    status
  }
}

export function moveCard(fromList, toList, from, to){
  return {
    type: "MOVE_CARD_TRANSACTION",
    fromList,
    toList,
    from,
    to
  }
}