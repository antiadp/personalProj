import React, {Component} from 'react';
import axios from 'axios';
import './FavVenue.css';

import Nav from '../Nav/Nav'


export default class favVenues extends Component {
    constructor(){
        super()
        this.state= {
            favVenues: []
        }
    }
    componentDidMount(){
        axios.get('./uservenues')
            .then(res => {
                this.setState({
                    favVenues: res.data
                })
            })
    }
    removeFav() {
        axios.delete('./removeFav')
            .then(res => {
                res.status(200).send('Remove Success')
            })
    }


    render() {
        const faves = this.state.favVenues.map(venue =>{
            return(
                <div key={venue.id}>

                </div>
            )})

        return( 
            <div> 
                <Nav/>
                <div>

                fav page 
                </div>

            </div>
        )
    }
}