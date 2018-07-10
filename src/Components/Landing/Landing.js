import React, {Component} from 'react';
import axios from 'axios';

import './landing.css';

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
                <div className='login-top'>
                     <div className='login-logo'>
                        SOUNDCHEQ
                     </div>
                </div>
                <div className='login-cred-container'>
                <div>
                    Sign In
                </div>
                    <input
                        placeholder='username'
                        type='username'
                        />
                    <input 
                        placeholder='password'
                        type='password'
                        />
                    <button
                        placeholder='Sign In'
                        style= {{
                            borderColor: "green",
                            width: '15vw',
                            height: '17.5px',
                            borderRadius: '5px'
                        }}
                        >
                            Sign In
                    </button>
                </div>
            </div>
        )
    }
}