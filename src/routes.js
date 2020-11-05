import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home'
import Portfolio from './components/Portfolio/portfolio'
import About from './components/About/about'
import Contact from './components/Contact/contact'

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            {/* <Route path="/website-quotes" exact component={WebsiteQuotes} /> */}
        </Switch>
    )
}

export default routes
