import React, {Component} from 'react';

import './venuePage.css'
import Nav from '../Nav/Nav'
import axios from 'axios';


class VenuePage extends Component {
    constructor() {
        super()
        this.state= {
            venue: {}
        }
    }
componentDidMount() {
    this.getVenue()
}

getVenue = async () => {
    let venue = await axios.get(`/venue/${this.props.match.params.id}`)
    console.log('venueeee',venue)
    this.setState({
        venue: venue.data   
    }, ()=> console.log(this.state.venue))
}
    
    render(){
            return(
                <div className='main-container'>
                <Nav/>
                <br/>
                    <div> {this.state.venue.name} </div>
                </div>
            )
        }
    }
    
    export default VenuePage;
