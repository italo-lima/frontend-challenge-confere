import React, {createContext} from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import GlobalStyle from "./style/global"
import Header from "./components/Header"
import Board from "./components/Board"

const infoTransaction = (data) => {
  console.log(data)
}
export const CardContext = createContext({
  infoTransaction: null
})
 
function App() {
  
  return (
    // <CardContext.Provider value={{infoTransaction}}>
    //   <DndProvider backend={HTML5Backend}>
        <>
        <Header/>
        <Board/>
        
        <GlobalStyle/>
        </>
    //   </DndProvider>
    // </CardContext.Provider>
  )
}

export default App;
