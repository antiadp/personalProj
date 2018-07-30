import React, {Component} from 'react';
// import {slide as Menu} from 'react-burger-menu';
import './Nav.css'
import axios from 'axios';

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
           
            <div
                className='page-location'>
                Soundcheq   
            </div>
            <div className='logout'
                onClick={this.logout} >
                logout
            </div>

        </div>
    )}
}