import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"

import Routes from "./routes"
import GlobalStyle from "./style/global"
import Header from "./components/Header"
import SignIn from "./screens/SignIn"
// import Board from "./screens/Board"
import store from "./store/"
 
function App() {
  
  return (
    // <CardContext.Provider value={{infoTransaction}}>
    //   <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
        <Provider store={store}>
          <Routes />
          <GlobalStyle/>
          <ToastContainer autoClose={3000} />
        </Provider>
      </BrowserRouter>
    //   </DndProvider>
    // </CardContext.Provider>
  )
}

export default App;
