import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import dashBoardBI from '../pages/dashBoardBI';
import DogWalkers from '../pages/DogWalkers';
import Login from '../pages/loginFire';
import Login2 from '../pages/Login';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/login2" component={Login2}/>
        <Route exact path="/dogwalker" component={DogWalkers}/>
        <Route exact path="/dashboard" component={dashBoardBI}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
