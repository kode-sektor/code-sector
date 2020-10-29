import React from 'react'
import Header from '../header'
import Gallery from '../gallery'
import Services from '../services'
import Pricing from '../pricing'
import DesignProcess from '../designProcess'
import Footer from '../footer'

const home = () => {
    return (
        <>
            <Header />
            <Gallery />
            <Services />
            <Pricing />
            <DesignProcess />
            <Footer />
        </>
    )
}

export default home
