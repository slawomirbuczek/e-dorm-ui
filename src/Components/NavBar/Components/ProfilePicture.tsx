import React, {useContext, useState} from "react";
import IProfilePicture from "../Types/IProfilePicture";
import avatar from "Assets/Images/avatar.png";
import '../Styles/ProfilePicture.scss';
import {useHistory} from "react-router";
import {TokenContext} from "../../../Context/Token";
import Button from "../../Button";
import EButtonTypeList from "../../Button/Types/EButtonTypeList";
import profileListUser from "../../../Assets/Images/profile-list-user.png";
import profileListSettings from "../../../Assets/Images/profile-list-setting.png";
import profileListLogout from "../../../Assets/Images/profile-list-logout.png";

const initialBasicInfo = {
    firstName: "",
    photo: null
};

const ProfilePicture = ({userBasicInfo}: IProfilePicture) => {
    const {firstName, photo} = userBasicInfo ? userBasicInfo : initialBasicInfo;
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const history = useHistory();
    const {logoutUser} = useContext(TokenContext);

    const onClickProfile = () => {
        setIsMenuActive(!isMenuActive)
        history.push("/profile");
    };

    const onClickSettings = () => {
        setIsMenuActive(!isMenuActive)
        history.push("/settings");
    };

    const onClickLogout = () => {
        logoutUser && logoutUser();
        history.push("/login");
    };

    const image = photo ? `data:image/png;base64,${photo}` : "";

    return (
        <div className={"profile-wrapper"}>
            <img src={photo ? image : avatar} alt="" onClick={() => setIsMenuActive(!isMenuActive)}/>
            {isMenuActive && (
                <div className="profile-list-wrapper">
                    <Button
                        onClick={() => onClickProfile()}
                        type={EButtonTypeList.IMAGE_PROFILE_LIST}
                        value="Profile"
                        image={profileListUser}
                        imageDescription={"user"}
                    />
                    <Button
                        onClick={() => onClickSettings()}
                        type={EButtonTypeList.IMAGE_PROFILE_LIST}
                        value="Settings"
                        image={profileListSettings}
                        imageDescription={"settings"}
                    />
                    <Button
                        onClick={() => onClickLogout()}
                        type={EButtonTypeList.IMAGE_PROFILE_LIST}
                        value="Logout"
                        image={profileListLogout}
                        imageDescription={"logout"}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfilePicture;