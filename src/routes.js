import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Shop from './pages/Shop/Shop'
import SignIn_SignUp from './pages/SignIn-SignUp/SignIn_SignUp'

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={SignIn_SignUp}/>
    </Switch>
)