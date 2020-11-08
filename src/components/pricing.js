import React from 'react'
import { Link } from 'react-router-dom'

const pricing = () => {
    
    return (
        
        <section id="pricing-plan" className="pricing-plan">    
    
            <div className="container"> 
        
                <div className="section-header">                
                    <h2><span>CHOOSE THE BEST <strong>PRICING</strong> - BEAT IT! </span></h2>
                </div>

                <div className="row collapsed">

                    <div className="col-md-4">
                    
                        <div className="panel panel-default price">                         
                            <div className="panel-heading">Starter</div>                            
                            <div className="panel-body">                            
                                <h5><sup>$</sup>599</h5>                                 
                                <p className="lead">Small Businesses & Startups</p>                                
                            </div>

                            <ul className="list-unstyled">                            
                                <li>1 - 3 Pages Web Design</li>
                                <li>Custom-coded</li>
                                <li>Free Email Web Address</li>
                                <li>Free Hosting + Domain</li>
                                <li>
                                    <Link to="/contact#contact-page" className="plan-btn color">Get started</Link>
                                </li>                                
                            </ul>
                            
                        </div>
                        
                    </div>

                    <div className="col-md-4">
                    
                        <div className="panel panel-default price featured">
                        
                            <div className="panel-heading">Ultimate</div>
                            
                            <div className="panel-body">                            
                                <h5><sup>$</sup>1599</h5>                                
                                <p className="lead">Big Businesses / Ecommerce</p>                                
                            </div>

                            <ul className="list-unstyled">                            
                                <li>For small to large shops</li>
                                <li>Unlimited Pages / Products</li>
                                <li>Free Email Web Address</li>
                                <li>Free Hosting + Domain</li>
                                <li>
                                    <Link to="/contact#contact-page" className="plan-btn color">Get started</Link>
                                </li>                                
                            </ul>
                            
                        </div>
                        
                    </div>

                    <div className="col-md-4">
                    
                        <div className="panel panel-default price">                        
                            <div className="panel-heading">Professional</div>                            
                            <div className="panel-body">                            
                                <h5><sup>$</sup>835</h5>                                
                                <p className="lead">For Medium Businesses</p>                                
                            </div>

                            <ul className="list-unstyled">                            
                                <li>4 - 7 Pages Web Design</li>
                                <li>Custom-coded</li>
                                <li>Free Email Web Address</li>
                                <li>Free Hosting + Domain</li>
                                <li>
                                    <Link to="/contact#contact-page" className="plan-btn color">Get started</Link>
                                </li>                                
                            </ul>                            
                        </div>                       
                    </div>
                </div>                                    
            </div>
            
        </section>
    )
}

export default pricing
