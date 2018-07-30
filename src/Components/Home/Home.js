import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

import './home.css';
import Nav from '../Nav/Nav';
import VenuePage from '../Venue/VenuePage';

class Home extends Component {
    constructor() {
        super()
        this.state= {
            user: {},
            venues: [],
            events: [],
            searchInput: ''
        }
        this.getvenues = this.getvenues.bind(this)
        this.getuser = this.getuser.bind(this)
    }
    componentDidMount() {
        this.getuser()
        this.getvenues()
    }

    getuser(){
    axios.get('/getuserdata')
        .then(resp => {
            console.log("user res", resp)
            this.setState({
                user: resp.data
            })
        })
    }

    getvenues(){
        axios.get('/api/getVenues')
            .then(res => {
                // console.log("this is the res.data:", res.data)
                this.setState({
                    venues: res.data
                })
            })
            .catch(err => {
                console.log(err, 'error getting venues')
            })
    }

    venueSearch() {
        axios.get('./venues/search')
            .then(venues => {
                this.setState({
                    // set to new var or state.venues?
                })
            })
    }
    clearSearch() {
        this.getvenues()
    }

    render() {
        const allVenues = this.state.venues.map(venue => {
            return(
                <div className='vcards' key={venue.id}
                    style= {{"backgroundImage": "{venue.pic1}"}}>
                    <h5 className='vname'> {venue.name} </h5>
                    <div className='vcity-st'> {venue.city}, {venue.state} </div>
                    Sounds:
                    <div className='types'> {venue.stype1} </div>
                    <div className='types'> {venue.stype2} </div>
                    <div className='types'> {venue.stype3} </div>
                    Venue:
                    <div className='types'> {venue.vtyp1} </div>
                    <div className='types'> {venue.vtyp2} </div>
                    <div className='types'> {venue.vtyp3} </div>
                    <img className='venue-pic' src={venue.pic1} alt='venuepic'/>
                    <div className='star button'>  </div>
                    <hr/>
                </div>
                )})

        return (
            <div>
                <Nav/>
                <div className='search'
                    onClick={ () => this.clearSearch()
                    }>
                    <i className="fa fa-search" 
                        style={{"fontSize": "24px",
                                "color": "#D5CCE5",
                                "paddingLeft": "5px"
                        }}></i>
                    <input
                        className='search-input'
                        placeholder='Miami Beach, FL'
                        onChange={(e)=> {
                            this.setState({searchInput: e.target.value})
                        }}
                        style= {{
                            "height": "100%"
                        }}
                        />
                    <select className='search-by'>
                        <option> Venue Filter </option>
                        <option value={this.state.user.vtype1}> {this.state.user.vtype1} </option>
                        <option value={this.state.user.vtype2}> {this.state.user.vtype2} </option>
                        <option value={this.state.user.vtype3}> {this.state.user.vtype3} </option>
                    </select>
                </div>
                {this.state.searchInput}
                <Link to={VenuePage}>
                    {allVenues}
                </Link>
            </div>
        )
    }
}

export default Home;