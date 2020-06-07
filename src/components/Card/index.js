import React, {useRef} from "react"
import {useDrag, useDrop} from "react-dnd"
import {FaTrash} from "react-icons/fa"
import { useDispatch } from "react-redux"

import {Container, Description} from "./styles"
import {formatDate} from "../../utils/formatDate"
import {formatValue} from "../../utils/formatValue"
import * as TransactionActions from "../../store/modules/transaction/actions"

export default function Card({data, listIndex, cardIndex}){
  const ref = useRef();
  const dispatch = useDispatch();
  const [{isDragging}, dragRef] = useDrag({
    item: {
      type: 'CARD',
      transaction: data._id,
      cardIndex,
      listIndex
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  //item -> card arrastado
  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex //index da lista de origin
      const dragIndex = item.cardIndex; //card selecionado
      const targetIndex = cardIndex; //card destino
      const targetListIndex = listIndex //index da lista de destino

      if(dragIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      const targetSize = ref.current.getBoundingClientRect(); //informações do card (tamanho, posicionamento)
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      //evitando cálculo para o card que vem por cima, enquanto não atinge o meio do próximo
      if(dragIndex < targetIndex && draggedTop < targetCenter){
        return
      }

      //evitando cálculo para o card que vem por baixo, enquanto não atinge o meio do próximo
      if(dragIndex > targetIndex && draggedTop > targetCenter){
        return
      }

      dispatch(TransactionActions.moveCard(draggedListIndex, targetListIndex, dragIndex, targetIndex))
      item.cardIndex = targetIndex
      item.listIndex = targetListIndex
    }
  })

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} >
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