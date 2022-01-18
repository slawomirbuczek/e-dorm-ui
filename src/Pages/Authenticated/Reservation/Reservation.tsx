import './Styles/Reservation.scss'
import ReservationMenu from "./Components/ReservationMenu";
import {useState} from "react";
import EReservationType from "./Utils/EReservationType";
import ReservationTimetable from "./Components/ReservationTimetable";
import ReservationHistory from "./Components/ReservationHistory";
import IReservation from "./Types/IReservation";

const Reservation = () => {
    const [selectedType, setSelectedType] = useState<string>(EReservationType[EReservationType.LAUNDRY])
    const [reserved, setReserved] = useState<IReservation | null>(null)

    return (
        <div className="reservation-wrapper">
            <ReservationMenu onReservationSelected={(selectedType) => setSelectedType(selectedType)}/>
            <ReservationTimetable selectedType={selectedType} onReserve={(reservation) => setReserved(reservation)}/>
            <ReservationHistory type={selectedType} reserved={reserved}/>
        </div>
    )
}

export default Reservation