import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {updateFirstName, updateLastName, updateEmail} from '../../dux/Reducer'

import Nav from '../Nav/Nav'
import './register.css';
import Register2 from './Register2';
import solidCircle from "../../assets/circle-solid.svg"
import emptyCircle from '../../assets/circle-regular.svg'

class Register1 extends Component {
    // constructor(props){
    //     super(props)
    // }
    logout() {
        axios.post('/logout')
    }
    

    render(){
        return(
            <div>
                <Nav/>
                <div className='reg-container'>
                    <h3 className='page-title'> 
                        Complete Profile  
                        <br/>
                    </h3>
                    <div className='page-status'>
                            <img src={solidCircle} alt='inprog'/>
                            <img src={emptyCircle} alt='noprog'/>
                    </div>
                    <form
                        className="input-form">
                        First Name:
                        <br/>
                        <input
                            className="input-boxes"
                            placeholder='   ie: Jaanski'
                            type='name'
                            onChange={e => this.props.updateFirstName(e.target.value)}
                            />
                            <br/>
                        Last Name:
                        <br/>
                        <input
                            className="input-boxes"
                            placeholder="   ie: Mah'cello"
                            type="name"
                            onChange={e => this.props.updateLastName(e.target.value)}
                            />
                            <br/>
                        Email: 
                        <br/>
                        <input
                            className="input-boxes"
                            placeholder='DbestDough@nuts.com'
                            type= 'email'
                            onChange={e => this.props.updateEmail(e.target.value)}
                             />
                    </form>
                    <div className='buttons'>
                        <Link to={Register2}>
                            <button className='button-text' > Next </button>
                        </Link>
                    </div>
                    <br/>
                    
                        <button className='cancel-button'> Cancel </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { first, last, email } = state;
  
    return {
      first,
      last,
      email
    };
  }
  export default connect(mapStateToProps, {
    updateFirstName,
    updateLastName,
    updateEmail
  })(Register1);
  