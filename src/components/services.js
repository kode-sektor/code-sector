import React from 'react'
import { client } from '../client'

class services extends React.Component {

    state = {
        services : []
    }

    componentDidMount ()  {
        client.getEntries({'content_type' : 'code-sector-services'}).then((response) => {
            this.setState({
                services : response.items
            })
        }).catch(console.error)
    }

    render () {

        // console.log(this.state.services)
        
        return (
        
            <section id="primary-content">

                {this.state.services.map((service, index) => {

                    const {title, body, image} = service.fields;

                    return (

                        <article className="service container">
    
                            <div className="row">
                                <div className="col-md-12">                                            
                                    <div className="work module"> 
            
                                        <h1 className="section-header clock">{title}</h1>                            
                                        <div className="block" dangerouslySetInnerHTML={{__html : body.content[0].content[0].value }} />
                                        
                                        <figure className="img-container"> 
                                            <img className="img-responsive" src={image.fields.file.url} alt={image.fields.file.title}/>                                
                                            <figcaption>{title}</figcaption>                                
                                        </figure>
                                        
                                    </div>                            
                                </div>              
                            </div>            
                        
                        </article>
                    )

                })}
        
            </section>
        )
        
    }

}

export default services
