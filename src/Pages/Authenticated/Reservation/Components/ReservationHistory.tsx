import "./../Styles/ReservationHistory.scss"
import {useEffect, useState} from "react";
import sendRequest from "../../../../Requests/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import IReservationHistory from "../Types/IReservationHistory";
import ReservationHistoryItem from "./ReservationHistoryItem";
import IReservationHistoryProps from "../Types/IReservationHistoryProps";

const ReservationHistory = ({type, reserved}: IReservationHistoryProps) => {
    const [reservationHistory, setReservationHistory] = useState<IReservationHistory[]>([])

    useEffect(() => {
        const getReservationHistory = async () => {
            const reservationHistory = await sendRequest(
                EApiMethods.GET, '/reservations/' + type
            )
            setReservationHistory(reservationHistory)
        }

        getReservationHistory()
    }, [type, reserved])


    return (
        <div className="reservation-history-wrapper">
            <p className="reservation-history-header">Historia rezerwacji</p>
            {
                reservationHistory.map(
                    (reservation) => (
                        <ReservationHistoryItem reservationHistory={reservation}/>
                    )
                )
            }
        </div>
    )
}

export default ReservationHistory