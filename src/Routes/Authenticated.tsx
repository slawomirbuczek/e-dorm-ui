import Dashboard from 'Pages/Authenticated/Dashboard';
import {Link, Route, Switch} from "react-router-dom";
import Forum from "../Pages/Authenticated/Forum";
import React from "react";

const Authenticated = () => (
    <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/forum" component={Forum}/>
        <Route path="*">
            <Link to="/dashboard"/>
        </Route>
    </Switch>
);

export default Authenticated;