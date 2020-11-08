import React from 'react'
import {client} from '../../client'
import Header from '../header'
import Footer from '../footer'
import WorkTogether from '../work-together'
import { FaGithub } from 'react-icons/fa'
import { Button } from 'reactstrap';


class portfolio extends React.Component{

    state = {
        portfolio : [],
        sortedPortfolio : [],
        categories : [],

        paginate : {
            entries : [],
            statePrev : false,
            stateNext : false,
            factor : 0,
            perPage : 4,
        }
    }

    componentDidMount ()  {
        client.getEntries({'content_type' : 'codeSectorPortfolio'}).then((response) => {

            let statePrev = false, stateNext = false
            let factor = this.state.paginate.factor, perPage = this.state.paginate.perPage

            if (response.items.length > 0) {
                if (factor ===0) statePrev = true
            } 
            if (factor === Math.floor(((response.items).length - 1) / perPage)) {
                stateNext = true
            }

            this.setState({
                portfolio : response.items,
                sortedPortfolio : response.items,
                paginate : {
                    ...this.state.paginate,
                    statePrev,
                    stateNext,
                    entries : (response.items).slice(0, this.state.paginate.perPage)    // Hold first 4 items
                },
                categories : this.getCategories(response.items)
            })
        }).catch(console.error)
    }

    // Dynamically create buttons
    getCategories = (items) => {

        let tempItems = items.map(item => {
            const fields = item.fields
            let {category, multipleCategories} = fields 

            if (multipleCategories) {   // [react, apps]
                if (Array.isArray(multipleCategories)) {
                    return multipleCategories   // returns array into tempItems array
                } else {
                    return ''
                }
            }
             else { // apps
                if (category) {
                    return category
                } else {
                    return ''
                }
            }
        })
        let categories = Array.from(new Set(tempItems.flat())); // spreads nested multipleCategories array
        categories = ['all', ...categories]
        return categories
    }

    loadPortfolio = () => { // Load portfolio conent on page
        let items = '';
        if (this.state.sortedPortfolio) {
            items = (this.state.paginate.entries).map((value, i) => {
                // console.log(value);
                const {caption, githubLink, link, poster} = value.fields
                return (
                    <div  key={i} style={{backgroundImage : `url(${poster.fields.file.url})`}} className="portfolio-grid-link col-md-6">
                        <a rel="external noreferrer" href={link} target="_blank" className="portfolio-link-ext">
                            <span className="link-ext-title">{caption}</span>
                        </a>
                        <a className="portfolio-github-link" rel="external noreferrer" href={githubLink} target="_blank"><FaGithub /></a>
                    </div>
                )
            })
        }
        // console.log(this.state.portfolio)
        return items
    }

    handleItems = (category) => {
        let tempItems = [...this.state.portfolio]
        let items = '', multItems = ''
        // console.log(tempItems);

        let statePrev = false, stateNext = false
        let factor = 0; // reset factor to when changing category 
        let perPage = this.state.paginate.perPage

        if (category === 'all') {

            if (tempItems.length > 0) {
                if (factor ===0) statePrev = true
            } 
            if (factor === Math.floor((tempItems.length - 1) / perPage)) {
                stateNext = true
            }

            this.setState(() => {
                return {
                    sortedPortfolio : tempItems,
                    paginate : {
                        ...this.state.paginate,
                        statePrev,
                        stateNext,
                        factor, 
                        entries :  tempItems.slice(0, this.state.paginate.perPage)
                    }
                }
            })
        } else {
            items = tempItems.filter(({fields}) => fields.category===category)  // Check for single category
            multItems = tempItems.filter(({fields}) => {    // Check for multiple categories
                if (fields.multipleCategories) {
                    return fields.multipleCategories.indexOf(category) !== -1
                } else {
                    return ''
                }
            })

            items = [...items, ...multItems]    // Concatenate single categories with multiple categories
            items = Array.from(new Set(items))  // Avoid duplicates

            if (items.length > 0) {
                if (factor ===0) statePrev = true
            } 
            if (factor === Math.floor((items.length - 1) / perPage)) {
                stateNext = true
            }

            this.setState(()=> {
                return {
                    sortedPortfolio : items,
                    paginate : {
                        ...this.state.paginate,
                        statePrev,
                        stateNext,
                        entries : items.slice(0, this.state.paginate.perPage)
                    }
                }
            })
        }
    }

    paginate = (elm) => {

        let paginatedEntries = this.state.sortedPortfolio

        let perPage = this.state.paginate.perPage
        let factor = this.state.paginate.factor
        let statePrev = false, stateNext = false

        if (paginatedEntries.length > 0) {
            let id = elm.target.id;

            (id === "next") ? factor++ : factor--
            statePrev = (factor === 0) ? true : false;
            // console.log(factor)

            if (factor === Math.floor((((paginatedEntries).length) - 1) / perPage)) {
                stateNext = true
            } else {
                stateNext = false
            }
        }

        paginatedEntries = paginatedEntries.slice(factor * perPage, (factor + 1) * perPage)

        this.setState({
            paginate : {
                ...this.state.paginate,
                statePrev,
                stateNext,
                factor, 
                entries : paginatedEntries
            }
        })
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

                    <div className="portfolio-buttonset buttonset">
                        <Button id="prev" className="btn" disabled={this.state.paginate.statePrev} onClick={(e) => this.paginate(e)} outline color="primary">Previous</Button>{' '}
                        <Button id="next" className="btn" disabled={this.state.paginate.stateNext} onClick={(e) => this.paginate(e)} outline color="primary">Next</Button>{' '}
                    </div>

                </div>

                <WorkTogether />

                <Footer />

            </section>
        )
    }

}

export default portfolio
