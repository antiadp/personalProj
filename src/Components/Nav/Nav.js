import React, {Component} from 'react';
// import {slide as Menu} from 'react-burger-menu';
import './Nav.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class header extends Component {
    constructor(props){
        super(props)
        this.state = {
            menuOpen: false,

        }
    }
    logout() {
        axios.post('/logout')
        .then(this.props.history.push("/"))
    }

    render() {
    return(
        <div className='main'>
           <Link
            to='/home'>
            <div
                className='page-location'>
                Soundcheq   
            </div>
            </Link>
            
            <div className=''> 
                <Link to='/Faves'>
                    ♡ 
                </Link>
            </div>
            
            <div className='logout'
                onClick={this.logout} >
                logout
            </div>

        </div>
    )}
}