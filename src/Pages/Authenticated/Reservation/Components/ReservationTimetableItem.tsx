import '../Styles/ReservationTimetableItem.scss'
import IReservationTimetableItemProps from "../Types/IReservationTimetableItemProps";

const ReservationTimetableItem = ({
                                      reservation,
                                      selectedReservation,
                                      onReservationSelected
                                  }: IReservationTimetableItemProps) => {
    const {id, startTime, endTime, available} = reservation

    return (
        <div className={`reservation-timetable-item-wrapper ${id === selectedReservation?.id ? 'selected' : ''}`}
             onClick={onReservationSelected}
        >
            <div className="reservation-time">
                <p><strong>Początek:</strong> {startTime}</p>
                <p><strong>Koniec:</strong> {endTime}</p>
            </div>
            <p className={
                `reservation-availability ${available ? 'available' : 'unavailable'}`}
            >
                {available ? 'Dostępny' : "Zarezerwowano"}

            </p>
        </div>
    )
}

export default ReservationTimetableItem