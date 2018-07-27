import React, {Component} from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateVtype1, updateVtype2, updateVtype3, updateStype1, updateStype2, updateStype3} from '../../dux/Reducer'

import Nav from '../Nav/Nav'
import solidCircle from "../../assets/circle-solid.svg"
import emptyCircle from '../../assets/circle-regular.svg'


class Register2 extends Component {
    

    updateUser() {
        axios.put()
    }

    render(){
        return(
            <div>
                <Nav/>
                <div className='reg-container'>
                    <div>
                        <h3 className="page-title">
                            Complete Profile
                            <div className='page-status'>
                                <img src={solidCircle} alt='inprog'/>
                                <img src={emptyCircle} alt='noprog'/>
                            </div>
                        </h3>
                    <div>
                        <h5>
                            Sound Types
                        </h5>
                    </div>
                    </div>
                        <select type='radio' min='1' max='3' multiple>
                            <option value="Electronic Dance Music "> EDM </option>
                            <option value="Hip-Hop"> Hip-Hop </option>
                            <option value="Top40s"> Top 40's </option>
                            <option value="Comedy"> Comedy </option>
                            <option value="Live Performance"> Live Band </option>
                            <option value="Live DJ"> Live DJ </option>
                            <option value="Latin"> Latin Dance </option>
                            <option value="easy Listening"> Easy Listening </option>
                            <option value="Social Chatter"> Social Chatter </option>
                            <option value="Quiet"> Quiet </option>
                            <option value="Rock"> Rock </option>
                            <option value="Dance/Mashup"> Mashup Music </option>
                            <option value="Country"> Country </option>
                            <option value="Jazz"> Jazz </option>
                            <option value="Jukebox"> Jukebox </option>
                        </select>
                    <div>
                        <div>
                            <h5> 
                                Venue Types 
                            </h5>
                        </div>
                        <div>
                            <select type='radio' min='1' max='3' multiple>
                                <option value="Nightclub"> Nightclub </option>
                                <option value="Bar"> Bar </option>
                                <option value="Hookah"> Hookah Bar </option>
                                <option value="Activities"> Activities </option>
                                <option value="Comedy Club"> Comedy Club </option>
                                <option value="Live Venue"> Live Venue </option>
                                <option value="Adult Entertainment"> Adult Ent </option>
                                <option value="Outdoors"> Outdoor/Day Club </option>
                                <option value="Beer Bar"> Beer Bar </option>
                                <option value="Wine Bar"> Wine Bar </option>
                                <option value="Lounge"> Lounge </option>
                                <option value="Piano Bar"> Piano Bar </option>
                                <option value="Speakeasy"> Speakeasy </option>
                                <option value="Pub"> Pub </option>
                            </select>
                        </div>
                    </div>
                        <Link 
                            to='/home'
                            onClick = {e => {
                                this.updateUser()
                            }}>
                            Done 
                        </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {vType1, vType2, vType3, sType1, sType2, sType3} = state
}

export default connect(mapStateToProps, {
    updateVtype1, 
    updateVtype2, 
    updateVtype3, 
    updateStype1, 
    updateStype2, 
    updateStype3
})(Register2);