import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing/Landing';
import Register1 from './Components/Register/Register1';
import Register2 from './Components/Register/Register2';
import Register3 from './Components/Register/Register3';
import Home from './Components/Home/Home';
import VenuePage from './Components/Venue/VenuePage';
import FavVenues from './Components/FavVenue/FavVenue';

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/register1" component={Register1}/>
        <Route path="/register2" component={Register2}/>
        <Route path="/register3" component={Register3}/>
        <Route path="/home" component={Home}/>
        <Route path="/venue" component={VenuePage}/>
        <Route path='/faves' component={FavVenues}/>
    </Switch>
);

