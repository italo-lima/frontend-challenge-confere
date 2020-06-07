import React from "react"
import {useDrag} from "react-dnd"
import {FaTrash} from "react-icons/fa"
import { useDispatch } from "react-redux"

import {Container, Description} from "./styles"
import {formatDate} from "../../utils/formatDate"
import {formatValue} from "../../utils/formatValue"
import * as TransactionActions from "../../store/modules/transaction/actions"

export default function Card({data, listIndex}){
  const dispatch = useDispatch();
  // const [{isDragging}, dragRef] = useDrag({
  //   item: {
  //     type: 'CARD',
  //     transaction: data
  //   },
  //   collect: monitor => ({
  //     isDragging: monitor.isDragging(),
  //   })
  // })

  return (
    <Container /*ref={dragRef} isDragging={isDragging} */ >
      <header>
        <div>
          <p>Cartão: *****{data.card.number}</p>
          <p>Expiração: {data.card.expiry}</p>
        </div>
        <button onClick={() => dispatch(TransactionActions.destroyTransaction(data._id, listIndex))}>
          <FaTrash size={16} />
        </button>
      </header>
      <Description>
        <div>
          <p>{formatDate(data.createdAt)}</p>
          <p>{formatValue(data.value)}</p>
        </div>
        <p>{data.description}</p>
      </Description>
    </Container>
  )
}