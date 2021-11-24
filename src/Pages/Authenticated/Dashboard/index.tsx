import React, {useContext, useEffect, useState} from 'react';
import './Styles/Dashboard.scss';
import IUserBasicInfo from "../../../Components/NavBar/Types/IUserBasicInfo";
import sendRequest from "../../../Authentication/sendRequest";
import EApiMethods from "../../../Utils/Types/EApiMethods";
import {TokenContext} from "../../../Context/Token";
import DashboardInfo from "./Components/DashboardInfo";
import Announcements from "./Components/Announcements";

const Dashboard = (): JSX.Element => {
    const {isLoggedIn} = useContext(TokenContext);
    const [userBasicInfo, setUserBasicInfo] = useState<IUserBasicInfo | null>(null);

    useEffect(() => {
        const getUserData = async () => {
            if (!isLoggedIn) {
                return null;
            }

            return updateUserData();
        };

        getUserData();
    }, [isLoggedIn]);

    const updateUserData = async () => {
        const userData = await sendRequest(EApiMethods.GET, 'users/self');

        if (!userData) {
            return null;
        }

        return setUserBasicInfo(userData);
    };

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                <iframe
                    id="airly_95146359"
                    src="https://airly.org/map/widget.html#w=280&h=800&m=true&i=true&d=false&ah=true&aw=false&l=en&it=AIRLY_CAQI&us=metric&ut=celsius&lat=50.0847660757&lng=19.9966207904"
                >
                </iframe>
                <div className="main-content">
                    <h2>Witaj {userBasicInfo?.firstName}</h2>
                    <Announcements/>
                </div>
                <DashboardInfo/>
            </div>
        </div>
    );
};

export default Dashboard;