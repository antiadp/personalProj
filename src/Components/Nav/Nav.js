import React, {Component} from 'react';
// import {slide as Menu} from 'react-burger-menu';
import './Nav.css'


export default class header extends Component {
    constructor(){
        super()
        this.state = {
            menuOpen: false,

        }
    }
    handleClick() {
        this.setState({menuOpen: true})
    }

    render() {
    return(
        <div className='main'>
            <div>
            <i className="fa fa-bars" 
                onClick= { e => {
                    this.handleClick()
                }}
                style={{
                "paddingLeft": "10px",
                "fontSize": "36px",
                "color": "white"
                }}></i>
                {/* <Menu className='menu-drawer'>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu> */}
            </div>
            <div
                className='page-location'>
                Soundcheq    
            </div>
            <div>
            <i className="fa fa-filter" 
                style={{
                "paddingRight": "10px",
                "fontSize": "36px", 
                "color": "white"
                }}></i>
            </div>

        </div>
    )}
}