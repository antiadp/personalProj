import React, {Component} from 'react';
import axios from 'axios';

class VenueCard extends Component {
        state = {
        venues: [],
        sort: ''
    }

    componentDidMount() {
        axios.get('/api/getVenues').then(venues => {
            this.setState({venues: venues.data})
        }).catch(err => {
            console.log("The error:", err)
        }) 
    }
    render() {
        // console.log(this.state.venues)
        // const userVenues = this.state.venues.map(venue => {
        //     return (
        //         <VenueCard 
        //             key={venue.id}
        //             id={venue.id}
        //             name={venue.name}
        //             city={venue.city}
        //             vtype1={venue.vtype1}
        //             vtype2={venue.vtype2}
        //             vtype3={venue.vtype3}
        //             />
        //     )
        // })
        return(
            <div>
                {/* {VenueCard} */}
            </div>
        )
    }
}

export default VenueCard;