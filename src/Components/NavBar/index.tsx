import React, {useContext, useEffect, useState} from 'react';
import Button from "../Button";
import EButtonTypeList from "../Button/Types/EButtonTypeList";
import {useHistory} from "react-router";
import './Styles/NavBar.scss';
import IUserBasicInfo from "./Types/IUserBasicInfo";
import sendRequest from "../../Authentication/sendRequest";
import EApiMethods from "../../Utils/Types/EApiMethods";
import {TokenContext} from "../../Context/Token";
import ProfilePicture from "./Components/ProfilePicture";

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
        const userData = await sendRequest(EApiMethods.GET, '/users');

        if (!userData) {
            return null;
        }

        return setUserBasicInfo(userData);
    };

    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-container">
                <Button
                    onClick={() => history.push('/dashboard')}
                    type={EButtonTypeList.NAVBAR}
                    value="Dashboard"
                />
                <Button
                    onClick={() => history.push('/forum')}
                    type={EButtonTypeList.NAVBAR}
                    value="Forum"
                />
                <ProfilePicture userBasicInfo={userBasicInfo}/>
            </div>
        </div>
    );
};

export default NavBar;