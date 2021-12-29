import Dashboard from 'Pages/Authenticated/Dashboard';
import {Link, Route, Switch} from "react-router-dom";
import Forum from "../Pages/Authenticated/Forum/Forum";
import React from "react";
import Messager from "../Pages/Authenticated/Messager/Messager";
import Emergency from "../Pages/Authenticated/Emergency/Emergency";

const Authenticated = () => (
    <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/forum" component={Forum}/>
        <Route exact path="/messager" component={Messager}/>
        <Route exact path="/tickets" component={Emergency}/>
        <Route path="*">
            <Link to="/dashboard"/>
        </Route>
    </Switch>
);

export default Authenticated;