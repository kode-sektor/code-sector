import React from 'react'
import Header from '../header'
import Gallery from '../gallery'
import Services from '../services'
import Pricing from '../pricing'
import DesignProcess from '../designProcess'

const home = () => {
    return (
        <>
            <Header />
            <Gallery />
            <Services />
            <Pricing />
            <DesignProcess />
        </>
    )
}

export default home
