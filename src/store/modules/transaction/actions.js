export function addTransaction(transaction) {
  return {
    type: "ADD_TRANSACTION",
    transaction
  }
}

export function destroyTransaction(id, listIndex) {
  return {
    type: "DESTROY_TRANSACTION",
    id,
    listIndex
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