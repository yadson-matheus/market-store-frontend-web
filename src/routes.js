import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Login } exact /> 
            </Switch>
        </BrowserRouter>
    );
}
