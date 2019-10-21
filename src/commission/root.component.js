import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CurrentCommission from './Page/current-commission.js'
import AllCommission from './Page/all-commission.js'


export default class Root extends React.Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route path="/commission/"  exact component={CurrentCommission} />
                    <Route path="/commission/:id" exact component={AllCommission} />
                </ Switch>
            </Router >
        );
    }
}




