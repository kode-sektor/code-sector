import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import emailjs from 'emailjs-com'

import { FaYoutube, FaTwitter, FaLinkedinIn, FaGithub, FaGooglePlusG, FaFacebook } from 'react-icons/fa'

import Header from '../header'
import Footer from '../footer'


export default class extends React.Component {

    render () {

        return (

            <>
    
            <Header/>
            
            <div id="contact-page">
    
                <section id="contact">
            
                    <div className="container">
                    
                        <div className="row">
                                
                            <div className="col-sm-7">  
    
                                <h3 className="page-title contact-header">Contact Me By Mail</h3>                    
                                <p>Don't know how to go about your web project? Feel free to contact about anything and you'll be gotten back to as soon as possible.</p>  
                                <div className="status alert alert-success" style={{display: 'none'}}></div>
                                
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        cms: 'custom-coded',
                                        completionDate : '',
                                        phone : '',
                                        existingWebsite : '',
                                        budget : '600-1000',
                                        totalPages : '',
                                        ecommerce : 'no',
                                        websiteExamples : '',
                                        notes : ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        name: Yup.string()
                                            .required('Name is required'),
                                        email: Yup.string()
                                            .email('Email is invalid')
                                            .required('Email is required')
                                    })}
                                    onSubmit={(fields) => {    
                                        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                                        emailjs.send('gmail', process.env.REACT_APP_EMAILJS_TEMPLATE_ID, fields, process.env.REACT_APP_EMAILJS_USER_ID).then((response) => {
                                            alert('Thank you for your Project Quote')
                                            console.log('SUCCESS!', response.status, response.text)
                                        }, ((error) => {
                                            alert('Error processing Project Quote')
                                            console.log('FAILED...', error)
                                         }))
                                    }}
                                >
                                    {({ errors, status, touched }) => (
                                        <Form id="main-contact-form" className="siteform" name="contact-form" method="post" action="" role="form" autoComplete>
                                            <div className="row form-content">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <Field name="name" id="name" type="text"  placeholder="Name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email</label>
                                                        <Field name="email" id="email" type="text" placeholder="Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-content">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Phone</label>
                                                        <Field name="phone" id="phone" type="text"  placeholder="Phone" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="existingWebsite">Existing website (if applicable)</label>
                                                        <Field name="existingWebsite" id="existingWebsite" type="text" placeholder="https://" className={'form-control' + (errors.existingWebsite && touched.existingWebsite ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="existingWebsite" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-content">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="budget">What is your budget ($CAD)?</label>
                                                        <Field as="select" name="budget" id="budget" type="text" className={'form-control' + (errors.budget && touched.budget ? ' is-invalid' : '')}>
                                                            <option value="600-1000">600-1000</option>
                                                            <option value="1000-1500">1000-1500</option>
                                                            <option value="1500-2000">1500-2000</option>
                                                            <option value="2000-2500">2000-2500</option>
                                                            <option value="2500-3000">2500-3000</option>
                                                            <option value="3000-4000">3000-4000</option>
                                                            <option value="4000-5000">4000-5000</option>
                                                            <option value="5000-10000">5000-10000</option>
                                                            <option value="10000+">10000+</option>
                                                            <option value="No Budget">No Budget</option>
                                                        </Field>
                                                        <ErrorMessage name="budget" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="totalPages">Total number of pages</label>
                                                        <Field name="totalPages" id="totalPages" type="number" placeholder="" className={'form-control' + (errors.totalPages && touched.totalPages ? ' is-invalid' : '')}>
                                                        </Field>
                                                        <ErrorMessage name="totalPages" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-content">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="completionDate">Completion Date</label>
                                                        <Field name="completionDate" id="completionDate" type="date" min={new Date().toISOString().split("T")[0]} value={new Date().toISOString().split("T")[0]}  placeholder="completionDate" className={'form-control' + (errors.completionDate && touched.completionDate ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="completionDate" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="ecommerce">E-commerce required</label>
                                                        <Field as="select" name="ecommerce" id="ecommerce" type="text" className={'form-control' + (errors.ecommerce && touched.ecommerce ? ' is-invalid' : '')}>
                                                            <option value="no">No</option>
                                                            <option value="yes">Yes</option>
                                                        </Field>
                                                        <ErrorMessage name="ecommerce" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="row form-row">

                                                <div className="col-sm-12">
                                                    <label for="requirement" className="control-label">Choose suitable requirement:</label>
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                    <Field id="requirement" name="requirement" as="select" className={'requirement form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                                        <option selected value="services">I want people to know about my services and what I do</option>
                                                        <option value="products">I want to sell my products online</option>
                                                        <option value="recruitment">I want a recruitment website</option>
                                                        <option value="booking system">I want a website with booking system</option>
                                                        <option value="news website">I want a blog and news website</option>
                                                        <option value="something other">I want some of the features and more</option>
                                                    </Field>
                                                    <ErrorMessage name="requirement" component="div" className="invalid-feedback" />
                                                </div>                            
                                            </div> */}

                                            <p>All custom-coded sites are powered by the bootstrap framework</p>
                                                        
                                            <div className="row">                            
                                                <div className="col-sm-6 form-group">                                
                                                    <Field id="custom-coded" type="radio" name="cms" value="custom" checked className={(errors.cms && touched.cms ? ' is-invalid' : '')} />
                                                    <label htmlFor="custom-coded" className="form-check-label">Custom coded</label>
                                                    <ErrorMessage name="cms" component="div" className="invalid-feedback" />
                                                </div>                            
                                                <div className="col-sm-6 form-group">       
                                                    <Field id="wordpress" type="radio" name="cms" value="wordpress" className={(errors.cms && touched.cms ? ' is-invalid' : '')} />
                                                    <label htmlFor="wordpress" className="form-check-label">WordPress CMS</label>
                                                    <ErrorMessage name="cms" component="div" className="invalid-feedback" />
                                                </div>                        
                                            </div>
                                            
                                            <div className="row">                        
                                                <div className="col-sm-12">                            
                                                    <div className="form-group">   
                                                        <label htmlFor="websiteExamples">Do you have examples of websites in which you like the overall design of?
</label>
                                                        <Field as="textarea" name="websiteExamples" id="websiteExamples" className="form-control" rows="5" ></
                                                        Field>
                                                    </div>                                
                                                </div>  
                                                <div className="col-sm-12">                            
                                                    <div className="form-group">   
                                                        <label htmlFor="notes">Notes or special requests
</label>
                                                        <Field as="textarea" name="notes" id="notes" className="form-control" rows="5" ></
                                                        Field>
                                                    </div>                                
                                                </div>  
                                                <div className="col-sm-12">
                                                    <div className="form-group">                                
                                                        <button type="submit" className="btn">Send Message</button>                                    
                                                    </div> 
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                    
                            </div>
                                             
                            <div className="col-sm-5 contact-socials">
    
                                <h3 className="page-title">Code Sector Socials</h3>
    
                                <div className="row">                    
                                    <div className="col-sm-10">                        
                                        <p>Please note: I get really busy sometimes, nevertheless, I will always respond to your mail. Please be patient. Thanks!</p>                                                    
                                    </div>                                                
                                </div>
                                
                                <div className="row">
                                
                                    <div className="col-sm-6">                        
                                        <ul className="social">
                                            <li><a href="www.facebook.com/"><FaFacebook className="icons"/> Facebook</a></li>
                                            <li><a href="www.googleplus.com/"><FaGooglePlusG className="icons"/> Google Plus</a></li>
                                            <li><a href="www.pinterest.com/"><FaGithub className="icons"/> GitHub</a></li>
                                        </ul>                            
                                    </div>                        
                                    <div className="col-sm-6">                        
                                        <ul className="social">
                                            <li><a href="linkedin.com/"><FaLinkedinIn className="icons"/> LinkedIn</a></li>
                                            <li><a href="twitter.com/"><FaTwitter className="icons"/> Twitter</a></li>
                                            <li><a href="youtube.com/"><FaYoutube className="icons"/> Youtube</a></li>
                                        </ul>                            
                                    </div>
                                    
                                </div>
                                
                            </div>
                        
                        </div>
    
                    </div>
                    
                </section>
    
            </div>
    
            <Footer/>
    
            </>
        )

    }

}
