import "./../Styles/ReservationHistoryItem.scss"
import IReservationHistoryItemProps from "../Types/IReservationHistoryItemProps";

const ReservationHistoryItem = ({reservationHistory}: IReservationHistoryItemProps) => {

    const {date, startTime, endTime} = reservationHistory

    return (
        <div className="reservation-history-item-wrapper">
            <p><strong>Data:</strong> {date}</p>
            <p><strong>Godzina rozpoczęcia:</strong> {startTime}</p>
            <p><strong>Godzina zakończenia:</strong> {endTime}</p>
        </div>
    )
}

export default ReservationHistoryItem