import React, {Component} from 'react';
import axios from 'axios';

import './home.css';
import Nav from '../Nav/Nav';
import VenueCards from '../Venue/venueCard';

class Home extends Component {
    constructor() {
        super()
        this.state= {
            user: {},
            venues: [],
            events: []
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
                console.log("this is the:", res.data)
                this.setState({
                    venues: res.data
                })
            })
            .catch(err => {
                console.log(err, 'error getting venues')
            })
    }


    render() {
        const allVenues = this.state.venues.map(venue => {
            return(
                <div className='vcards' key={venue.id}>
                    <h5 className='vname'> {venue.name} </h5>
                    <div className='vcity-st'> {venue.city}, {venue.state} </div>
                    <div className='types'> {venue.stype1} </div>
                    <div className='types'> {venue.stype2} </div>
                    <div className='types'> {venue.stype3} </div>
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
                <div className='search'>
                    <i className="fa fa-search" 
                        style={{"fontSize": "24px",
                                "color": "#D5CCE5"
                        }}></i>
                    <input
                        className='search-input'
                        placeholder='Miami Beach, FL'
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
                {allVenues}
            </div>
        )
    }
}

export default Home;