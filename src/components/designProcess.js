import React from 'react'
import {Link} from 'react-router-dom'

import { FaEnvelope, FaPen, FaRocket, FaDesktop } from 'react-icons/fa'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const designProcess = () => {

    return (

        <section className="des-process">
        
        	<div className="container">
            
                <div className="stages">
                
                	<div className="section-header">                    
                   		<h2><span>YOUR WEBSITE DESIGN PROCESS</span></h2>                        
	                </div>
                    
                    <p className='intro'>When organizations or individual clients look for a partner to help design and produce <em>high-quality spellbinding web projects</em> that meet or exceed their rigorous standards - if at all they set any, they count on Code Sector to deliver. By combining specialised knowledge, skills and experience, Code Sector is <em>always able</em> to consistently deliver the goods.</p>

                                
                    <Tabs>
                        <TabList>
                            <header className="row text-center">
                                <Tab className="col-sm-3 tab-link">
                                    <span className="process-icons"><FaEnvelope/></span>
                                    <h5>ENQUIRY & SIGNUP</h5>                                    
                                </Tab>
                                <Tab className="col-sm-3 tab-link">
                                    <span className="process-icons"><FaPen/></span>
                                    <h5>PLANNING</h5>                                    
                                </Tab>
                                <Tab className="col-sm-3 tab-link">
                                    <span className="process-icons"><FaRocket/></span>
                                    <h5>WEB BUILDING</h5>                                
                                </Tab>
                                <Tab className="col-sm-3 tab-link">
                                    <span className="process-icons"><FaDesktop/></span>
                                    <h5>SITE LAUNCH</h5>                                
                                </Tab>
                            </header>
                        </TabList>

                        <TabPanel>
                            <p>You first submit your enquiry via mail or via the contact form on this site and I will get in touch to talk through the most apposite package for you.</p> 
                        </TabPanel>
                        <TabPanel>
                            <p>Here, the requirements are set: the look and feel - how it appears, any particular colours, layout, typography, number of columns, widgets, functionality and all that. Intelligence meets art.</p> 
                        </TabPanel>
                        <TabPanel>
                            <p>If coming with no design of your own, you are given the privilege to browse a spectrum of mockup samples. If it interests you, you could blend in various parts of multiple mockups to engineer something even more <em>unique</em>. Communication is necessary here. We must be in agreement with the design you feel comfortable with to avoid unnecessary backtracking.</p> 
                        </TabPanel>
                        <TabPanel>
                            <p>Cometh the hour, cometh your website. It will be made live and submitted to search engines. You will also be sent the login details and trained on how to edit and maintain your website.</p> 
                        </TabPanel>
                    </Tabs>

                </div>

                <div className="col-md-12 text-center"> 
                    <Link to="/contact" className="get-started btn btn-info primary-btn">Get Started</Link>
                </div>
            
                <div className="underlay-1">                
                    <h3 className="title-blurb"><span>Your mission critical projects</span><span style={{marginLeft: '2cm'}}> demand</span> <span><em> clarity.</em></span> <span>Code Sector</span> <span> delivers.</span></h3>                
                </div>

            </div>

            
        
        </section>
    )
}

export default designProcess
