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
                                        requirement: 'I want people to know about my services and what I do',
                                        cms: 'custom-coded',
                                        message : ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        name: Yup.string()
                                            .required('Name is required'),
                                        email: Yup.string()
                                            .email('Email is invalid')
                                            .required('Email is required'),
                                        requirement: Yup.string()
                                            .required('Choose suitable requirement'),
                                    })}
                                    onSubmit={(fields) => {    
                                        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))

                                        emailjs.send('gmail', process.env.REACT_APP_EMAILJS_TEMPLATE_ID, fields, process.env.REACT_APP_EMAILJS_USER_ID).then((response) => {
                                            console.log('SUCCESS!', response.status, response.text)
                                        }, ((error) => {
                                            console.log('FAILED...', error)
                                         }))
                                    }}
                                >
                                    {({ errors, status, touched }) => (
                                        <Form id="main-contact-form" className="siteform" name="contact-form" method="post" action="sendemail.php" role="form" autocomplete>
                                            <div className="row form-content">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="firstName">Name</label>
                                                        <Field name="name" type="text"  placeholder="Name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email</label>
                                                        <Field name="email" type="text" placeholder="Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row form-row">

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
                                            </div>

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
                                                        <Field as="textarea" name="message" id="message" className="form-control" rows="8" placeholder="Message"></Field>
                                                    </div>                                
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
