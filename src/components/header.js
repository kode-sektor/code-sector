import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    // navbarHandler = () => {
    //     this.state.navbarOpen ? 
    //         this.setState ({navbarOpen : false, css : 'collapse navbar-collapse'}) : 
    //         this.setState ({navbarOpen : true, css : 'collapse navbar-collapse show'})
    // }

    state = {
        path : window.location.pathname,
        hash : window.location.hash
    }

    render () {

        return (

            <header id="page-header" className="page-header">
    
                <Link className="brand" to="/">
                    <img src="images/images/kode-sektor-logo-sm.png" alt="logo"/>
                </Link>
            
                <div id="subpage-header" className="subpage-header">
                    <h1 id="frontpage-title" className="frontpage-title"><span>W</span><span>e</span><span>b </span> <span>S</span><span>o</span><span>l</span><span>u</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span></h1>
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
                                    <li className={this.state.path==='/' ? 'marked' : ''}><Link to="/">Home</Link></li>
                                    <li className={this.state.path==='/portfolio' ? 'marked' : ''}><Link to="/portfolio">Portfolio</Link></li>
                                    <li className={this.state.path==='/about' ? 'marked' : ''}><Link to="/about">Who am I?</Link></li>
                                    <li className={(this.state.path==='/contact' && this.state.hash!=='#contact-page') ? 'marked' : ''}><Link to="/contact">Contact</Link></li>
                                    <li className={this.state.hash==='#contact-page' ? 'marked' : ''}><Link class="cta-free-quote" to="/contact#contact-page">Get Free Quote</Link></li>
                                </ul>
                            </nav>
                        </div>
                    
                    </div>
                
                </div>
            
            </header>
        )
    }

}

export default Header