import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './landing.css';
import register from '../Register/Register';

export default class login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''

        }
    }
    componentDidMount() {
        axios.get()
    }

    render() {
        return(
            <div className='login-main'>
            <div className='topmargin'></div>
                <div className='login-cred-container'>
                <div id=''>
                    Sign In
                </div>
                    <input
                        className='input-box'
                        placeholder='   USERNAME'
                        type='username'
                        />
                    <input 
                        className= 'input-box'
                        placeholder='   PASSWORD'
                        type='password'
                        />
                    <button
                        className='sign-in-btn'
                        >
                            Sign In
                    </button>

                </div>
                <div 
                    className='links'>

                    <Link 
                        to={register}
                        className='register'>
                        <div className='links-content'>
                            <div>
                                Register
                            </div>
                            <div>
                                >
                            </div>
                        </div>
                    </Link>

                    <Link to={register}
                    className='password'>
                        <div className='links-content'>
                            <div>
                                Forgot Password
                            </div>
                            <div>
                                >
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}