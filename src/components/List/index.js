import React, {useContext} from "react"
import {useDrop} from "react-dnd"

import {MdAdd} from "react-icons/md"
import {Container} from "./styles"
import {CardContext} from "../../App"

import Card from "../Card"

export default function List({data}){
  // const {infoTransaction} = useContext(CardContext)

  // const [{isOver}, dropRef] = useDrop({
  //   accept: 'CARD',
  //   drop: (item, monitor) => console.log(item),
  //   collect: monitor => ({
  //     isOver: monitor.isOver(),
  //   })
  // })

  return (
    <Container /*ref={dropRef} done={data.done} */ >
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card => <Card key={card.received._id} data={card} />)}
      </ul>
    </Container>
  )
}