import React from "react"
import {Route, Redirect} from "react-router-dom"

import { isAuthenticated } from '../services/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const signed = isAuthenticated() ? true : false
    console.log(isPrivate, signed)

    if(!signed && isPrivate){
        return <Redirect to='/' />
    }

    if(signed && !isPrivate){
        return <Redirect to='/board' />
    }   

    return <Route {...rest} render={(props) => <Component {...props}/> } />
}

//definindo valor padrão
RouteWrapper.defaultProps = {
    isPrivate: false
}