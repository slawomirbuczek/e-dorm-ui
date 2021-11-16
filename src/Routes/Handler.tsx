import {TokenContext} from 'Context/Token';
import {useContext} from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import ScrollToTop from 'Utils/Functions/ScrollToTop';
import GlobalRoutes from './Global';
import Authenticated from "./Authenticated";
import NavBar from "../Components/NavBar";

const AppRoutesHandler = () => {
    const {isLoggedIn} = useContext(TokenContext);

    if (isLoggedIn) {
        return (
            <Router>
                <ScrollToTop/>
                <div className="main-app-wrapper-authenticated">
                    <NavBar/>
                    <Switch>
                        <Redirect exact from="/" to="/dashboard" />
                        <Authenticated />
                    </Switch>
                </div>
            </Router>
        );
    }

    return (
        <Router>
            <ScrollToTop/>
            <div className="main-app-wrapper">
                <Switch>
                    <Redirect exact from="/" to="/login"/>
                    <div className="page-wrapper">
                        <GlobalRoutes/>
                    </div>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRoutesHandler;