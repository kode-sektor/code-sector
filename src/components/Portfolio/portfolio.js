import React from 'react'
import Header from '../header'
import Footer from '../footer'
import WorkTogether from '../work-together'

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

            <WorkTogether />

            <Footer />

        </section>
    )
}

export default portfolio
