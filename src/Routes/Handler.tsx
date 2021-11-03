import {TokenContext} from 'Context/Token';
import {useContext} from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import ScrollToTop from 'Utils/Functions/ScrollToTop';
import GlobalRoutes from './Global';

const AppRoutesHandler = () => {
    const {isLoggedIn} = useContext(TokenContext);

    if (isLoggedIn) {
        return (
            <Router>
                <ScrollToTop/>
                <div className="main-app-wrapper-authenticated">

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