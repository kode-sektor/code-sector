import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home'
import Portfolio from './components/Portfolio/portfolio'

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            {/* <Route path="/website-quotes" exact component={WebsiteQuotes} /> */}
        </Switch>
    )
}

export default routes
