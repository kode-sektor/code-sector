import React from 'react'
import {client} from '../../client.js'

import { FaLightbulb, FaPencilAlt, FaCog, FaDesktop } from 'react-icons/fa'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import Header from '../header'
import Footer from '../footer'


class about extends React.Component {

	state = {
		faq : []
	}

	componentDidMount ()  {
        client.getEntries({'content_type' : 'codeSectorFaq'}).then((response) => {
        	this.setState({
        		faq : response.items
        	})
        })
	}
	
	careerYrs = () => {
        const startYr = 2015
		let activeYrs = new Date().getFullYear() - startYr
        return activeYrs
    }

	render () {

   		return (

			<>

			<Header />

	        <div id="about-me" className="about-me">
	                    
		        <div className="frame">
		        
		            <div className="container">
		        
		                <header>            
		                    <h2 className="page-title author">About Me (CodeSector)</h2>                
		                </header>
		                
		                <div className="row">
		                
		                    <div className="col-md-4">
		                        <figure className="img-frame">                
		                            <img id="codesector-avatar" className="img-responsive" src="images/images/anonavatar.jpg" alt="about-me"/>
		                        </figure>                  
		                    </div>
		                    
		                    <div className="col-md-8">                
		                        
		                        <h3 className="page-subtitle">Intro</h3>
		                        <p className="intro">                    
		   							I'M A {this.careerYrs()}-YEAR EXPERIENCED <strong>FULL-STACK WEB DEVELOPER</strong> WITH HONOURS IN WEB DESIGN AND DEVELOPMENT. I CREATE <strong>WORLD-CLASS WEBSITES</strong> WITH EFFECTIVE VISUAL IDENTITIES FOR COMPANIES (OF ALL SIZES) / INDIVIDUALS AROUND THE GLOBE.                        
		                        </p>

		                        <h3 className="page-subtitle">The Languages & Tools I Use</h3>

		                        <dl id="web-tools">
		                            <dt>HTML5, CSS3, JavaScript (jQuery), NodeJS, ReactStrap, GatsbyJS, GraphQL, ReactJS, Firebase, HandleBars, Contentful, MongoDB & MySQLi:</dt>
		                            <dd><p>I make use of a range of the latest bleeding-edge technologies to create clean, amazing, modern, responsive and accessible websites and web applications.</p>
									<p>Complex layouts and designs are my niche. But that never rules them out of being accessible, navigable and responsive.</p>
									</dd>

		                        </dl>
		                            
		                    </div>
		                    
		                </div>
		                
		                <hr/>
		            
		            </div>
		        
		        </div>
		        
		        <section id="why-patronize" className="container">
		        
		            <div className="author-name pulse d-none d-md-block">
		            	<span>C</span>
		            	<span>O</span>
		            	<span>D</span>
		            	<span>E</span>
		            	<span>S</span>
		            	<span>E</span>
		            	<span>C</span>
		            	<span>T</span>
		            	<span>O</span>
		            	<span>R</span>
		            </div>

					<div class="group">
                
						<div class="row">
							
							<div class="col-12 text-center">                    
								<h3 class="page-title text-center margin-top-10">Why Websites I Build Will Serve You</h3>
							</div>
							
						</div>
						
						<div class="row main-feature text-center">
					
							<div class="col-md-3">   
								<div class="feature-content">                            
									<FaLightbulb className="icons" />                         
									<h5>Lightweight</h5>                                
									<p>You can not ignore mobile devices anymore and with this theme all your visitors will be very pleased how they see your website.</p>                                
								</div>
							</div>
								
							<div class="col-md-3">
								<div class="feature-content">                            
									<FaPencilAlt className="icons" />                             
									<h5>Beautiful Typrography</h5>                                
									<p>This theme integrates with WordPress in the most awesome way! Functionality is separated from style through uncreadble useful for user. </p>                                
								</div>
							</div> 
							
							<div class="col-md-3">
								<div class="feature-content">                            
									<FaCog className="icons"/>                               
									<h5>Full time Support</h5>                                
									<p>Full Time support. Very much helpful and possesive at the same time. With all this in mind you won't be outdated anytime soon. Really!! </p>                                
								</div>
							</div>
							
							<div class="col-md-3">
								<div class="feature-content">                            
									<FaDesktop className="icons"/>                               
									<h5>Ultra Responsive</h5>                                
									<p>Website is as optimized as it gets. No useless wrappers, no double headings, everything is coded with SEO in mind. Content is KING! </p>                                
								</div>
							</div>

						</div>
						
					</div>
		            
		        </section>

		        <hr className="margin-bottom-40" />
		        
		        <section className="container">
		                            
		            <div className="row">
		        
		                <section className="col-md-6">
		               
		                    <h3 className="page-title skills">Skill Set</h3>
		                        
		                    <h4 className="progress-label">NodeJS                    
		                        <span className="float-right">77%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">SQL                    
		                        <span className="float-right">88%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                   
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{width: "88%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">BOOTSTRAP                    
		                        <span className="float-right">91%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" style={{width: "91%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">HTML5                    
		                        <span className="float-right">87%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{width: "87%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">REACT                    
		                        <span className="float-right">80%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">PHOTOSHOP                    
		                        <span className="float-right">50%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">CSS3                    
		                        <span className="float-right">75%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">JQUERY                    
		                        <span className="float-right">86%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}>                        
		                        </div>                        
		                    </div>

		                    <h4 className="progress-label">MongoDB                    
		                        <span className="float-right">86%</span>                        
		                    </h4>
		                    
		                    <div className="progress progress-sm">                    
		                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}>                        
		                        </div>                        
		                    </div>
		                                                
		                    
		                </section>

		                <section className="col-md-6 accordion-panel-group">

		                    <h3 className="page-title skills">About My Work</h3>

		                    <div id="accordion">

	        	                <Accordion>

		        	                {this.state.faq.map((value, i) => {

		        	                	let {header, body} = value.fields
		        	                	// console.log(value.fields)
		        	                	body = body.content[0].content[0].value
		        	                	// console.log(body, header)

		        	                	return (
			                                <AccordionItem key={i} className="panel panel-default">
			                                    <AccordionItemHeading>
			                                        <AccordionItemButton>
			                                            <div className="panel-heading">
							                                <h4 className="panel-title">
							                                    <a className="accordion-toggle" href="javascript:void(0)" data-parent="#accordion" data-toggle="collapse">
							                                        {header}  
							                                    </a>
							                                </h4>
							                                <span className="float-right"><i className="glyphicon glyphicon-plus"></i></span>
							                            </div>
			                                        </AccordionItemButton>
			                                    </AccordionItemHeading>
			                                    <AccordionItemPanel>
			                                        <article className="accordion-body" dangerouslySetInnerHTML={{__html : body}} />
			                                    </AccordionItemPanel>
			                                </AccordionItem>
		        	                	)
		        	                })}

		        	            </Accordion>

		                    </div>

		                </section>

		            </div>
		        
		        </section>
		                    
		    </div>
									
			<Footer />

			</>
	   )

	}
}

export default about
