import call from "Assets/Images/call.png";
import pin from "Assets/Images/pin.png";
import React from "react";
import '../Styles/DashboardInfo.scss';

const DashboardInfo = (): JSX.Element => {

    return <div className="dashboard-info-wrapper">
        <p>
            <img src={call} alt="call"/>
            <strong> Kontakt:</strong>
            <br/>
            tel. administracja: 123 456 789
            <br/>
            tel. portiernia: 987 654 321
        </p>
        <p>
            <strong>Kierownik DS – Janina Nowak</strong>
            <br/>
            e-mail: <a href="mailto:manager@gmail.com">janina.nowak@gmail.com</a>
        </p>
        <p>
            <strong>Kierownik DS – Adam Kowalski</strong>
            <br/>
            e-mail: <a href="mailto:vice.manager@gmail.com">adam.kowalski@gmail.com</a>
        </p>
        <p>
            <strong>Godziny przyjęć interesantów:</strong>
            <br/>
            Poniedziałek - Czwartek: godz. 8.00 - 16.00
            <br/>
            Piątek: godz. 8.00-14.00
        </p>
        <p>
            <img src={pin} alt="pin"/>
            <strong>Adres:</strong>
            <br/>
            ul. Skarżyńskiego 3,
            <br/>
            31-866 Kraków
        </p>
    </div>;

};

export default DashboardInfo;