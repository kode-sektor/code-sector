import React, {useState} from 'react'
import {client} from '../../client'
import Header from '../header'
import Footer from '../footer'
import WorkTogether from '../work-together'
import { FaGithub } from 'react-icons/fa'


class portfolio extends React.Component{

    state = {
        portfolio : [],
        categories : []
    }

    getCategories = (items) => {
        let tempItems = items.map(item => {
            // const {caption, githubLink, link, category, multipleCategories, poster } = item.fields
            const fields = item.fields
            let {category, multipleCategories} = fields
            console.log (multipleCategories);

            if (multipleCategories) {
                if (Array.isArray(multipleCategories)) {
                    return multipleCategories   // returns array into tempItems array
                }
            }
             else {
                if (category) return category
            }
        })
        let categories = Array.from(new Set(tempItems.flat())); // spreads nested multipleCategories array
        categories = ['all', ...categories]
        return categories
    }

    componentDidMount ()  {
        client.getEntries({'content_type' : 'codeSectorPortfolio'}).then((response) => {
            this.setState({
                portfolio : response.items,
                categories : this.getCategories(response.items)
            })
        }).catch(console.error)
    }

    render () {
        console.log(this.state.categories)

        return (

            <section id="portfolio-single-page" className="page-section">
    
                <Header />

                <div className="select">
                    <select>
                        <option selected disabled>Choose an option</option>
                        {this.state.categories.map((category) => {
                            return (<option>{category}</option>)
                        })}
                    </select>
                </div>

                <div id="portfolio-detail" className="container sheet code">
    
                    <section className="portfolio-grid row">
                        <div className="portfolio-grid-link col-sm-6 github-adidas">
                            <a rel="external" href="https://kode-sektor.github.io/landing-page-adidas-psd-to-html/index.html" target="_blank" className="portfolio-link-ext">
                                <span className="link-ext-title">ADIDAS LANDING PAGE</span>
                            </a>
                            <a rel="external" href="https://kode-sektor.github.io/landing-page-adidas-psd-to-html/index.html" target="_blank"><FaGithub /></a>
                        </div>
                        <div className="portfolio-grid-link col-sm-6 github-humber-recreation">
                            <a rel="external" target="_blank" className="portfolio-link-ext" href="https://kode-sektor.github.io/wddm-120-psd-html-layout/">
                                <span className="link-ext-title">HUMBER RECREATION LAYOUT</span>
                            </a>
                        </div>
                        <div className="portfolio-grid-link col-sm-6 github-gidifest">
                            <a rel="external" target="_blank" className="portfolio-link-ext" href="https://kode-sektor.github.io/wddm-121-gidifest-microsite/index.html">
                                <span className="link-ext-title">GIDIFEST MICROSITE</span>
                            </a>
                        </div>
                        <div className="portfolio-grid-link col-sm-6 github-airbnb">
                            <a rel="external" target="_blank" className="portfolio-link-ext" href="https://kode-sektor.github.io/application-interface-redesign/source-codes/index.htm">
                                <span className="link-ext-title">AIRBNB REDESIGN</span>
                            </a>
                        </div>
                    </section>
    
                </div>
    
                <WorkTogether />
    
                <Footer />
    
            </section>
        )
    }

}

export default portfolio
