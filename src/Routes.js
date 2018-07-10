import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing/Landing';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Venue from './Components/Venue/Venue';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/register' component={Register}/>
        <Route path='/home' component={Home}/>
        <Route path='/venue' component={Venue}/>
    </Switch>
)

