import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import styled from "styled-components";

import Gold from '../../assets/Gold';
import White from '../../assets/White';


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
            id, name, city, state, stype1, stype2, stype3, vtyp1, vtyp2, vtyp3, pic1, fav
        } = this.props
        
        return(
            <div style={{background: 'rgba(76, 175, 80, 0.8)', textDecoration: 'none'}}>
            <Link    to={`/venue/${id}`}>
            <Cards style={{background: `url(${pic1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '100% 85%'}}>
                <CityContainer>
                    <Star> {fav ?  <Gold/> : <White/>} </Star>
                    <Vname> {name} </Vname>
                       <div className='vcity-st'> {city}, {state} </div>
                       </CityContainer>

                <InfoContainer>
                 
                <div className='vcards' key={id}>
                    <TypeContainer className="info-container">
                    
                       <Types> {stype1} </Types>
                       <Types> {stype2} </Types>
                       <Types> {stype3} </Types>
                       
                       <Types> {vtyp1} </Types>
                       <Types> {vtyp2} </Types>
                       <Types> {vtyp3} </Types>
                    
                    </TypeContainer>
                </div>
                    {/* <img className='venue-pic' src={pic1} alt='venuepic'/> */}
                </InfoContainer>
            </Cards>
                </Link>
            </div>
        )
    }
}

export default VenueCard;


const TypeContainer = styled.section`
    display: flex;
`

const CityContainer = styled.section`
color: white;
padding-left:1rem;
padding-top:1rem;
text-decoration: none;
&:visited {
    text-decoration:none;
}
&:visited {
    text-decoration:none;
}
`

const Cards = styled.section`
position:relative;
height: 14rem;
margin-bottom:.5rem;
`

const InfoContainer= styled.section`
position:absolute;
    bottom:0;
    padding:.5rem;
`
const Types = styled.div`
margin-left: 10px;

`

const Star = styled.div`
position: absolute;
right: 15px;
`

const Vname = styled.div`
margin-bottom: 5px;
`