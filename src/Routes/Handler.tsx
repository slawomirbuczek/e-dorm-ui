import Footer from 'Components/Footer';

import NavBar from 'Components/NavBar';
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
                <NavBar/>
                <Switch>
                    <Redirect exact from="/" to="/login"/>
                    <div className="page-wrapper">
                        <GlobalRoutes/>
                    </div>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

// return (
//     <Router>
//         <ScrollToTop />
//         <div className='main-app-wrapper'>
//             {!isLoggedIn && <NavBar />}
//             {isLoggedIn && <Menu />}
//             <Switch>
//                 <Redirect exact from="/" to={isLoggedIn ? "/dashboard" : "/login"} />
//                 <div className='page-wrapper'>
//                     {isLoggedIn ? <Authenticated /> : <GlobalRoutes />}
//                 </div>
//             </Switch>
//             <Footer />
//         </div>
//     </Router>
// )

export default AppRoutesHandler;