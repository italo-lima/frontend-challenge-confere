import React from "react"
import {Switch} from "react-router-dom"

import Route from "./Router"

import Board from "../screens/Board"
import SignIn from "../screens/SignIn"

export default function Routes(){

    return(
        <Switch>
            <Route exact path='/' component={SignIn}/>

            <Route path='/board' component={Board} isPrivate/>
           
        </Switch>
    )
}