import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import PerformersPage from '../pages/PerformersPage';


const Router = () => (
    <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/performers" component={PerformersPage} />
        <Redirect to="/" component={AuthPage} />
    </Switch>
); 

export default Router;