import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import {connect} from 'react-redux';


import './home.css';
import Nav from '../Nav/Nav';
import VenuePage from '../Venue/VenuePage';
import VenueCard from '../Venue/venueCard';





class Home extends Component {
    constructor() {
        super()
        this.state= {
            venues: [],
            searchInput: ''
        }
        this.getvenues = this.getvenues.bind(this)
    }
    componentDidMount() {
    this.getvenues()
    }


    getvenues(){
        axios.get('/api/getVenues')
            .then(res => {
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
        return (
            <div>
                <Nav/>
                <div style={{marginTop: '110px'}}/>
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
                        <option value={this.props.user.vtype1}> {this.props.user.vtype1} </option>
                        <option value={this.props.user.vtype2}> {this.props.user.vtype2} </option>
                        <option value={this.props.user.vtype3}> {this.props.user.vtype3} </option>
                    </select>
                </div>
                {this.state.venues 
                     ?
                    this.state.venues.map(venue => {
                        let {id, name, city, state, stype1, stype2, stype3, vtype1, vtype2, vtype3, pic1, favorite } = venue;
                        return(
                            <VenueCard 
                                key={id} id={id} name={name} city={city} state={state} 
                                stype1={stype1} stype2={stype2} stype3={stype3} 
                                vtype1={vtype1} vtype2={vtype2} vtype3={vtype3} pic1={pic1} fav={favorite}
                            />
                        )
                    })    
                    : null
                }
                
            </div>
        )
    }
}
function mapStateToProps(state){
    const{user} = state
    return {
        user
    }
}



export default connect(mapStateToProps)(Home);