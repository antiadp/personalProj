import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../dux/Reducer';

import './landing.css';

class login extends Component {
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
        console.log('hit')
        axios
          .post('/auth/user', {
            username: this.state.username,
            password: this.state.password
          })
          .then(res =>{
              console.log(res.data)
              this.props.updateUser(res.data)
          })
          .then(res => this.props.updateUser ? this.props.history.push('/home') : this.props.history.push('/') )
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
                            onClick={() => this.login()}
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
                                <div style={{"marginBottom": 15}}>
                                    Register
                                </div>
                                <div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <Link to='/Register1'
                    className='password'>
                        <div className='links-content'>
                            <div style={{"marginBottom": 5}}>
                                Forgot Password
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
export default connect(null, {updateUser})(login);