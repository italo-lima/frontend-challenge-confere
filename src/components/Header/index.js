import React from "react"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"

import {Container} from "./styles"

export default function Header(){
  const history = useHistory()

  const handleSignOut = () => {
    localStorage.removeItem('@confere:token');
    localStorage.removeItem('@confere:user');

    toast.error("Até breve!!!")

    setTimeout(() => {
      history.push('/');

    }, 2500)
  }; 

  return (
    <Container>
      <header>
        <h1>Board</h1>
        <button onClick={handleSignOut}>Logout</button>
      </header>
    </Container>
  )
}