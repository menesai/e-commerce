import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Sample from './components/Directory/sample/Sample'
// import 
const HatsPage =() =>(
    <div>
        hats PAge
    </div>
);

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hats' component={HatsPage}/>
        <Route path='/sample' component={Sample}/>
    </Switch>
)