import {useContext, useEffect, useState} from "react";
import {TokenContext} from "../../../../Context/Token";
import sendRequest from "../../../../Authentication/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import IAnnouncements from "../Types/IAnnouncements";
import "../Styles/Announcements.scss";

const Announcements = (): JSX.Element => {

    const {isLoggedIn} = useContext(TokenContext);
    const [announcements, setAnnouncements] = useState<IAnnouncements[] | null>(null);

    useEffect(() => {
        const getAnnouncements = async () => {
            if (!isLoggedIn) {
                return null;
            }

            return updateAnnouncements();
        };

        getAnnouncements();
    }, [isLoggedIn]);

    const updateAnnouncements = async () => {
        const response = await sendRequest(EApiMethods.GET, 'announcements');

        if (!response) {
            return null;
        }

        console.log(response);
        return setAnnouncements(response);
    };


    return (
        <div className="announcements-wrapper">
            <div className="announcements-container">
                <p className="header">Ogłoszenia administracyjne</p>
                {
                    announcements && announcements.map(
                        (announcement) => (
                            <div className="announcement">
                                <h3 className="name">{announcement.fullName}</h3>
                                <h3 className="subject">{announcement.subject}</h3>
                                <p className="content">{announcement.content}</p>
                                <p className="date">{announcement.date}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );

};

export default Announcements;