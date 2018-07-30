import React, {Component} from 'react';

import './venuePage.css'
import Nav from '../Nav/Nav'


class VenuePage extends Component {

        render(){
            return(
                <div className='main-container'>
                <Nav/>
                    <div>Venue Page </div>
                    <div><i className="fa fa-angle-right"> </i> </div>
                </div>
            )
        }
    }
    
    export default VenuePage;
