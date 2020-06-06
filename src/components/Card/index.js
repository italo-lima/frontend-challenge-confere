import React from "react"
import {useDrag} from "react-dnd"

import {Container, Label} from "./styles"

export default function Card({data}){
  console.log(data)
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
        <p></p>
      </header>
      <p>Card</p>
    </Container>
  )
}