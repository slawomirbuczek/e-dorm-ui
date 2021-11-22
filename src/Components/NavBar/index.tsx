import React, {useContext, useEffect, useState} from 'react';
import Button from "../Button";
import EButtonTypeList from "../Button/Types/EButtonTypeList";
import {useHistory} from "react-router";
import './Styles/NavBar.scss';
import IUserBasicInfo from "./Types/IUserBasicInfo";
import sendRequest from "../../Authentication/sendRequest";
import EApiMethods from "../../Utils/Types/EApiMethods";
import {TokenContext} from "../../Context/Token";
import message from "Assets/Images/message.png";
import emergency from "Assets/Images/emergency.png";
import dormitory from "Assets/Images/dormitory.png";
import reservation from "Assets/Images/reservation.png";
import forum from "Assets/Images/forum.png";
import room from "Assets/Images/room.png";
import settings from "Assets/Images/setting.png";
import logout from "Assets/Images/logout.png";
import getImageFromResponse from "../../Utils/Functions/getImageFromResponse";

const NavBar = () => {
    const history = useHistory();
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

    const {logoutUser} = useContext(TokenContext);

    const onClickLogout = () => {
        logoutUser && logoutUser();
        history.push("/login");
    };

    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-container">
                <div className="logo">
                    <Button
                        onClick={() => history.push('/dashboard')}
                        type={EButtonTypeList.IMAGE_PRIMARY}
                        image={dormitory}
                        imageDescription="dashboard"
                        value=""
                    />
                </div>
                <Button
                    onClick={() => history.push('/forum')}
                    type={EButtonTypeList.IMAGE_PRIMARY}
                    image={forum}
                    imageDescription="forum"
                    value=""
                />
                <Button
                    onClick={() => history.push('/reservations')}
                    type={EButtonTypeList.IMAGE_PRIMARY}
                    image={reservation}
                    imageDescription="reservations"
                    value=""
                />
                <Button
                    onClick={() => history.push('/room')}
                    type={EButtonTypeList.IMAGE_PRIMARY}
                    image={room}
                    imageDescription="rooms"
                    value=""
                />
                <div className="nav-bar-right">
                    <Button
                        onClick={() => history.push('/emergency')}
                        type={EButtonTypeList.IMAGE_PRIMARY}
                        image={emergency}
                        imageDescription="emergency"
                        value=""
                    />
                    <Button
                        onClick={() => history.push('/message')}
                        type={EButtonTypeList.IMAGE_PRIMARY}
                        image={message}
                        imageDescription="messages"
                        value=""
                    />
                    <Button
                        onClick={() => history.push('/settings')}
                        type={EButtonTypeList.IMAGE_PRIMARY}
                        image={settings}
                        imageDescription="settings"
                        value=""
                    />
                    <Button
                        onClick={() => onClickLogout()}
                        type={EButtonTypeList.IMAGE_PRIMARY}
                        image={logout}
                        imageDescription="logout"
                        value=""
                    />
                    <img
                        className="profile"
                        onClick={() => history.push('/profile')}
                        src={getImageFromResponse(userBasicInfo?.photo)}
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;