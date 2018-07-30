import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './landing.css';

export default class login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    
    }
    handleChange(prop, val) {
        this.setState({ [prop]: val });
      }
    login() {
        axios
          .post('/auth/user', {
            username: this.state.username,
            password: this.state.password
          })
          .then(res => this.props.history.push('/home'));
      }

    render() {
        return(
            <div className='login-main'>
                <div 
                    className='topmargin'>
                </div>
                <div className='login-cred-container'>
                    <div id=''>
                        Sign In
                    </div>
                        <input
                            className='input-box'
                            placeholder='   USERNAME'
                            type='username'
                            value={this.state.username}
                            onChange={e => this.handleChange("username", e.target.value)}
                
                            />
                        <input 
                            className= 'input-box'
                            placeholder='   PASSWORD'
                            type='password'
                            value={this.state.password}
                            onChange={e => this.handleChange("password", e.target.value)}
                            />
                        <button
                            className='sign-in-btn'
                            onClick={e => this.login()}
                            >
                                Sign In
                        </button>

                    </div>
                <div 
                    className='links-container'>
                    <div>
                        <Link 
                            to='/Register1'
                            className='register'>
                            <div 
                                className='links-content'>
                                <div>
                                    Register
                                    <i className="fa fa-angle-right"></i>
                                </div>
                                <div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <Link to='/Register1'
                    className='password'>
                        <div className='links-content'>
                            <div>
                                Forgot Password
                                <i className="fa fa-angle-right"></i>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}