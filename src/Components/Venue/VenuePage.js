import React, {Component} from 'react';

import './venuePage.css'
import Nav from '../Nav/Nav'
import axios from 'axios';

import Gold from '../../assets/Gold';
import White from '../../assets/White';


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

favoriteVenue() {
    axios.patch('/venue/updateFav')
        .then()
}

getVenue = async () => {
    let venue = await axios.get(`/venue/${this.props.match.params.id}`)
    this.setState({
        venue: venue.data   
    })
}
    
    render(){
            return(
                <div  className='main-container'>
                <Nav/>
                <br/>
                    <h3 style = {{marginTop: 60}}> {this.state.venue.name} </h3>
                        <br/>
                    <div>
                        {this.state.venue.pic1}
                        {this.state.venue.pic2}
                        {this.state.venue.pic3}
                    </div>
                        Description
                    <h6>{this.state.venue.description}</h6>
                    <div> 
                        {this.state.venue.favorite}
                    </div>
                    <div>
                        Venue Type:
                        <br/>
                        {this.state.venue.vtype1}   
                        {this.state.venue.vtype2}  
                        {this.state.venue.vtype3} 
                    </div>
                    <div>
                        Sound Type:
                        <br/>
                        {this.state.venue.stype1}
                        {this.state.venue.stype2}
                        {this.state.venue.stype3}

                    </div>
                    <div>
                        <h6>
                        Contact Details:
                        </h6>
                        <br/>
                        Address:
                        {this.state.venue.address}
                        {this.state.venue.city}, {this.state.venue.state}
                        Phone:
                        {this.state.venue.phone}
                        Web:
                        {this.state.venue.web}
                    </div>
                    <button
                        onClick={this.favoriteVenue}
                        className='star-button'
                        > 
                        {this.state.venue.favorite ? <Gold/>  : <White/> } 
                    </button>
                </div>
            )
        }
    }
    
    export default VenuePage;
