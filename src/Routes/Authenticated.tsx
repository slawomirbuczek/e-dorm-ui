import Dashboard from 'Pages/Authenticated/Dashboard'
import {Link, Route, Switch} from "react-router-dom"
import Forum from "../Pages/Authenticated/Forum/Forum"
import React from "react"
import Messager from "../Pages/Authenticated/Messager/Messager"
import TicketsBoard from "../Pages/Authenticated/Tickets/TicketsBoard"
import Rental from "../Pages/Authenticated/Rental/Rental";
import Reservation from "../Pages/Authenticated/Reservation/Reservation";

const Authenticated = () => (
    <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/forum" component={Forum}/>
        <Route exact path="/messager" component={Messager}/>
        <Route exact path="/rentable" component={Rental}/>
        <Route exact path="/tickets" component={TicketsBoard}/>
        <Route exact path="/reservations" component={Reservation}/>
        <Route path="*">
            <Link to="/dashboard"/>
        </Route>
    </Switch>
)

export default Authenticated