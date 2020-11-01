import React, {useState} from 'react'
import {client} from '../../client'
import Header from '../header'
import Footer from '../footer'
import WorkTogether from '../work-together'
import { FaGithub } from 'react-icons/fa'


class portfolio extends React.Component{

    state = {
        portfolio : [],
        sortedPortfolio : [],
        categories : []
    }

    componentDidMount ()  {
        client.getEntries({'content_type' : 'codeSectorPortfolio'}).then((response) => {
            this.setState({
                portfolio : response.items,
                sortedPortfolio : response.items,
                categories : this.getCategories(response.items)
            })
        }).catch(console.error)
    }

    getCategories = (items) => {
        let tempItems = items.map(item => {
            // const {caption, githubLink, link, category, multipleCategories, poster } = item.fields
            const fields = item.fields
            let {category, multipleCategories} = fields

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

    loadPortfolio = () => {
        let items = '';
        if (this.state.sortedPortfolio) {
            items = (this.state.sortedPortfolio).map((value, i) => {
                // console.log(value);
                const {caption, githubLink, link, multipleCategories, poster} = value.fields
                return (
                    <div  key={i} style={{backgroundImage : `url(${poster.fields.file.url})`}} className="portfolio-grid-link col-sm-6">
                        {/* <img src={poster.fields.file.url} alt={poster.fields.description} /> */}
                        <a rel="external" href={link} target="_blank" className="portfolio-link-ext">
                            <span className="link-ext-title">{caption}</span>
                        </a>
                        <a className="portfolio-github-link" rel="external" href={githubLink} target="_blank"><FaGithub /></a>
                    </div>
                )
            })
        }
        console.log(this.state.portfolio)
        return items
    }

    handleItems = (category) => {
        let tempItems = [...this.state.portfolio]
        // console.log(tempItems);

        if (category === 'all') {
            this.setState(() => {
                return {
                    sortedPortfolio : tempItems
                }
            })
        } else {
            let items = tempItems.filter(({fields}) => fields.category===category)  // Check for single category
            let multItems = tempItems.filter(({fields}) => {    // Check for multiple categories
                if (fields.multipleCategories) {
                    return fields.multipleCategories.indexOf(category) !== -1
                }
            })

            items = [...items, ...multItems]    // Concatenate single categories with multiple categories
            items = Array.from(new Set(items))  // Avoid duplicates

            this.setState(()=> {
                return {
                    sortedPortfolio : items
                }
            })
        }
    }

    render () {

        return (

            <section id="portfolio-single-page" className="page-section">

                <Header />

                <div className="select">
                    <select id="filter-portfolio" onChange={({target : {value}}) => {this.handleItems(value)}}>
                        {this.state.categories.map((category, i) => {
                            return (<option key={i} value={category}>{category}</option>)
                        })}
                    </select>
                </div>

                <div id="portfolio-detail" className="container sheet code">

                    <section className="portfolio-grid row">{this.loadPortfolio()}</section>

                </div>

                <WorkTogether />

                <Footer />

            </section>
        )
    }

}

export default portfolio
