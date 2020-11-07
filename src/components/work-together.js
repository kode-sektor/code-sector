import React from 'react'

class workTogether extends React.Component {

    state = {
        swing : ''
    }

    render () {

        return (
            <section id="work-together">
            
                <div className="container-fluid sheet text-center">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-1 body">
                                <p className="clarity"><em>Your critical web projects demand clarity.</em></p> 
                                <p><b>Like our work, and interested in working together?</b></p>
                                <p>Get in touch so we could discuss your requirements.</p>
                            </div>
                            <div className={`frame stamp d-none d-md-block ${this.state.swing}`}>
                                <img className="img-circle img-responsive hidden-xs" src="images/images/seal_of_approval_2.png" alt="proof_of_quality_logo"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 text-center"> 
                    <a onMouseEnter={() => {
                        this.setState({
                            swing : 'animated swing'
                        })
                    }} href="/contact#contact-page" className="get-started btn btn-info primary-btn">Get Started</a>
                </div>
            
            </section>
        )
    }
}

export default workTogether
