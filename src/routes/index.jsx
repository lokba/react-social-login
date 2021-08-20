import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NoMatchPage from '../pages/NoMatchPage';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={LoginPage} path="/" exact />
                <Route path="*" component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default RootRoute;