import React from 'react'
import Header from '../header'
import Footer from '../footer'

const portfolio = () => {

    return (

        <section id="portfolio-single-page" class="page-section">

            <Header />

            <div id="portfolio-detail" class="container sheet code">

                <section class="portfolio-grid row">
                    <div class="portfolio-grid-link col-sm-6 github-adidas">
                        <a rel="external" target="_blank" class="portfolio-link-ext" href="https://kode-sektor.github.io/landing-page-adidas-psd-to-html/index.html">
                            <span class="link-ext-title">ADIDAS LANDING PAGE</span>
                        </a>
                    </div>
                    <div class="portfolio-grid-link col-sm-6 github-humber-recreation">
                        <a rel="external" target="_blank" class="portfolio-link-ext" href="https://kode-sektor.github.io/wddm-120-psd-html-layout/">
                            <span class="link-ext-title">HUMBER RECREATION LAYOUT</span>
                        </a>
                    </div>
                    <div class="portfolio-grid-link col-sm-6 github-gidifest">
                        <a rel="external" target="_blank" class="portfolio-link-ext" href="https://kode-sektor.github.io/wddm-121-gidifest-microsite/index.html">
                            <span class="link-ext-title">GIDIFEST MICROSITE</span>
                        </a>
                    </div>
                    <div class="portfolio-grid-link col-sm-6 github-airbnb">
                        <a rel="external" target="_blank" class="portfolio-link-ext" href="https://kode-sektor.github.io/application-interface-redesign/source-codes/index.htm">
                            <span class="link-ext-title">AIRBNB REDESIGN</span>
                        </a>
                    </div>
                </section>

            </div>

            <section id="work-together">
        
                <div class="container-fluid sheet text-center">
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-push-2 col-md-6 col-md-push-3 body">
                                <p class="clarity"><em>Your critical web projects demand clarity.</em></p> 
                                <p><b>Like our work, and interested in working together?</b></p>
                                <p>Get in touch so we could discuss your requirements.</p>
                            </div>
                            <div class="frame stamp">
                                <img class="img-circle img-responsive hidden-xs" src="images/images/seal_of_approval_2.png" alt="proof_of_quality_logo"/>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/website-quotes" class="get-started btn btn-info primary-btn">Get Started</a>
            
            </section>

            <Footer />

        </section>
    )
}

export default portfolio
