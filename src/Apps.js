import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Com1 from './comp1';
import Com2 from './comp2';
import Com3 from './comp3';
import Hom from './home';
import Li from  './link';
import './index'

const App =() =>{
    return (
        <>
        <Li />
        <Switch>
            <Route exact path='/' component={Hom} />
            <Route exact path='/num1' component={Com1} />
            <Route exact path='/num2' component={Com2} />
            <Route  component={Com3} />
        </Switch>
        </>
    )
}

export default App;