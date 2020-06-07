import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"

import Routes from "./routes"
import GlobalStyle from "./style/global"
import store from "./store/"
 
function App() {
  
  return (
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Provider store={store}>
            <Routes />
            <GlobalStyle/>
            <ToastContainer autoClose={3000} />
          </Provider>
        </BrowserRouter>
    </DndProvider>
  )
}

export default App;
