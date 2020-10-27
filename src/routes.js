import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home'

const routes = () => {
    return (
       <Switch>
           <Route path="/" exact component={Home} />
       </Switch>
    )
}

export default routes
