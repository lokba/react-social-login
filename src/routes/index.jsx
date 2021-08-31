import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NoMatchPage from '../pages/NoMatch';
import GlobalStyles from '../Style/GlobalStyle';
import ReactGa from 'react-ga'

ReactGa.initialize("G-MQPQ38BGHY");
const RootRoute = () => {

    useEffect(() => {
        ReactGa.pageview(window.location.pathname);
    }, []);
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route path='/' component={LoginPage} exact />
                <Route path="*" component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default withRouter(RootRoute);