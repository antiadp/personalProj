import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import styled from "styled-components";
import VenuePage from './VenuePage'



class VenueCard extends Component {
    //     state = {
    //     venues: [],
    //     sort: ''
    // }

    // componentDidMount() {
    //     axios.get('/api/getVenues').then(venues => {
    //         this.setState({venues: venues.data})
    //     }).catch(err => {
    //         console.log("The error:", err)
    //     }) 
    // }
    render() {
        let {
            id, name, city, state, stype1, stype2, stype3, vtyp1, vtyp2, vtyp3, pic1
        } = this.props
        
        return(
            <div style={{background: 'rgba(76, 175, 80, 0.8)'}}>
            <Cards style={{background: `url(${pic1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '100% 85%'}}>
                <InfoContainer>
                <Link
                    to={`/venue/${id}`}
                >
                <div className='vcards' key={id}>
                    <h5 className='vname'> {name} </h5>
                    <TypeContainer className="info-container">
                       <div className='vcity-st'> {city}, {state} </div>
                       Sounds:
                       <div className='types'> {stype1} </div>
                       <div className='types'> {stype2} </div>
                       <div className='types'> {stype3} </div>
                       Venue:
                       <div className='types'> {vtyp1} </div>
                       <div className='types'> {vtyp2} </div>
                       <div className='types'> {vtyp3} </div>
                       <div className='star button'> ⭐ </div>
                    </TypeContainer>
                </div>
                    {/* <img className='venue-pic' src={pic1} alt='venuepic'/> */}
                </Link>
                </InfoContainer>
            </Cards>
            </div>
        )
    }
}

export default VenueCard;


const TypeContainer = styled.section`
    display: flex;
    
`

const Cards = styled.section`
position:relative;
height: 14rem;
margin-bottom:.5rem;
`

const InfoContainer= styled.section`
position:absolute;
    bottom:0;
`