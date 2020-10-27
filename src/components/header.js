import React from 'react'

const Header = () => {

    return (
        <header id="page-header" className="">

            <a className="brand" href="index.html">
                <img src="images/images/kode-sektor-logo-sm.png"/>
            </a>
        
            <div id="subpage-header">
                <h1 id="frontpage-title"><span>W</span><span>e</span><span>b </span> <span>S</span><span>o</span><span>l</span><span>u</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span></h1>
            </div> 
        
            <div className="main-header">
            
                <div className="block">
                
                    <div className="block-1">
                        <h2 id="web-motto">
                            <strong><span>C</span><span>r</span><span>e</span><span>a</span><span>t</span><span>i</span><span>v</span><span>e</span></strong>
                            <strong>Web Design...</strong>
                        </h2>

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                                        
                        <nav id="main-nav" className="navbar-collapse primary-nav" role="navigation">
                            <ul className="navbar-nav navbar-right nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/about">Who am I?</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                
                </div>
            
            </div>
        
        </header>
    )
}

export default Header