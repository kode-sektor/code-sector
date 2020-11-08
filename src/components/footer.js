import React from 'react'
import { FaYoutube, FaTwitter, FaLinkedinIn, FaGithub, FaGooglePlusG, FaFacebookF } from 'react-icons/fa'

const Footer = () => {

    const getYear = () => {
        let yr = new Date().getFullYear();
        return yr
    }

    return (

        <>

        <footer id="footer">
            
            <div className="container">
    
                <div className="row footer_1">  

                    <div className="col-lg-3">                   
                        <div className="content">                   
                            <h3 className="menu_head">Main Menu</h3>
                            <div className="footer_menu">                           
                            <ul>                        
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">Who am I?</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>                               
                        </div>                       
                    </div>
                </div>
                
                <div className="col-lg-3">

                    <div className="content">
                        <h3 className="menu_head">Useful Links</h3>
                        <div className="footer_menu">
                            <ul>
                            <li><a href="/terms-of-use">Terms of use</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                
                <div className="col-lg-3">

                    <div className="content">
                        <h3 className="menu_head">Contact Me</h3>
                        <address className="footer_menu">
                            <ul className="contact">
                                <li><i className="fa fa-map-marker"></i>
                                    <span>kay.commerce.soln@gmail.com</span>
                                </li>
                                <li><i className="fa fa-clock-o"></i>
                                    <span>Monday - Sunday: 7AM - 8PM</span>
                                </li>
                            </ul>
                        </address>
                    
                    </div>
                    
                    </div>
    
                    <div className="col-lg-3">
                
                        <div className="content">
                    
                            <div className="single_footer_top wow fadeInLeft">
                    
                                <h3 className="menu_head">Follow By Email</h3>

                                <div className="footer_menu subscribe_area">
                                    <p>"Subscribe here to get my periodic newsletter. Your details are safe."</p>
                                    <form action="https://formspree.io/f/moqpwvbj" method="post">
                                        <div className="subscribe_mail">
                                            <input className="form-control" type="email" name="email" id="email" placeholder="Email Address"/>
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <input className="submit_btn" type="submit" value="Submit"/>
                                    </form>
                                </div>
    
                            </div>
                                    
                        </div>
                    
                    </div>
                            
                </div>
    
                <div className="row footer_2">
                
                    <div className="col-lg-6 cf">
                        <div className="footer_bottom">
                            <ul className="social-contact list-inline">
                                <li> <a href="https://www.facebook.com/kardinal.kay"><FaFacebookF/></a></li>
                                <li> <a href="https://twitter.com/code_sector"><FaTwitter/></a></li>
                                <li> <a href="https://www.linkedin.com/in/ibiyemikayode/"><FaLinkedinIn/></a></li>
                                <li><a href="www.googleplus.com/"><FaGooglePlusG className="icons"/></a></li>
                                <li><a href="https://github.com/kode-sektor"><FaGithub className="icons"/></a></li>
                                <li><a href="youtube.com/"><FaYoutube className="icons"/></a></li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="col-lg-6">
                        <div className="footer_bottom text-right">
                            <p className="text-block copyright">Copyright &copy; {getYear()} <span> CODE SECTOR</span></p>
                        </div>
                    </div>
                </div>

            </div>
    
        </footer>
    
        <div className="left-pillar"></div>
    
        <div className="right-pillar"></div>
    
        <div id="back-top">
            <a id="scroll-btn" href="#page-header" className="scroll" data-scroll>
                <button className="btn-primary" title="Back to Top">
                    <i className="fa fa-angle-up"></i>
                </button>
            </a>
        </div>
            
        </>
    )
}

export default Footer;