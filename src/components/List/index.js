import React, {useContext} from "react"
import {useDrop} from "react-dnd"
import { useDispatch } from "react-redux"
import * as TransactionActions from "../../store/modules/transaction/actions"

import {Container} from "./styles"

import Card from "../Card"

export default function List({data, listIndex}){
  const dispatch = useDispatch();

  const [_, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => {
      if (data.cards.length === 0) {
        dispatch(TransactionActions.moveCard(item.listIndex, listIndex, item.cardIndex, 0))
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <Container ref={dropRef} >
      <header>
        <h2>{data.title}</h2>
      </header>
      <div>
        <ul>
          {data.cards.map((card, index) => <Card listIndex={listIndex} cardIndex={index} key={card._id} data={card} />)}
        </ul>
      </div>
    </Container>
  )
}