import '../Styles/ReservationTimetable.scss'
import IReservationTimetableProps from "../Types/IReservationTimetableProps";
import {useEffect, useState} from "react";
import sendRequest from "../../../../Requests/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import IReservation from "../Types/IReservation";
import ReservationTimetableItem from "./ReservationTimetableItem";
import Button from "../../../../Components/Button";
import EButtonTypeList from "../../../../Components/Button/Types/EButtonTypeList";
import parseDateToSelectedFormat from "../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../Utils/Types/EParseDateMethods";

const ReservationTimetable = ({selectedType, onReserve}: IReservationTimetableProps) => {
    const [plusDays, setPlusDays] = useState<number>(0)
    const [reservations, setReservations] = useState<IReservation[]>([])
    const [selectedReservation, setSelectedReservation] = useState<IReservation | null>(null)

    useEffect(() => {
        getReservations()
    }, [selectedType, plusDays])

    const getReservations = async () => {
        const reservations = await sendRequest(
            EApiMethods.GET, '/reservations/' + selectedType + '/' + plusDays
        )
        setReservations(reservations)
        setSelectedReservation(null)
    }

    const reserve = async (reservationId: number) => {
        await sendRequest(
            EApiMethods.POST, '/reservations/' + reservationId
        )
    }

    const handlePlusDays = (num: number) => {
        const newPlusDays = plusDays + num;

        if (newPlusDays >= 0 && newPlusDays <= 7) {
            setPlusDays(newPlusDays)
        }
    }

    const getDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + plusDays);
        return date
    }

    const handleReserve = async () => {
        selectedReservation && await reserve(selectedReservation.id)
        selectedReservation && onReserve(selectedReservation)
        getReservations()
    }

    return (
        <div className="reservation-timetable-wrapper">
            <div className="reservation-change-day">
                <Button
                    value="<"
                    onClick={() => handlePlusDays(-1)}
                    type={EButtonTypeList.PRIMARY}
                />
                <p>{parseDateToSelectedFormat(getDate(), EParseDateMethods.DDMMMYYY)}</p>
                <Button
                    value=">"
                    onClick={() => handlePlusDays(1)}
                    type={EButtonTypeList.PRIMARY}
                />
            </div>
            {
                reservations.map(
                    (reservation) => (
                        <ReservationTimetableItem
                            reservation={reservation}
                            onReservationSelected={() => setSelectedReservation(reservation)}
                            selectedReservation={selectedReservation}
                        />
                    )
                )
            }
            {
                selectedReservation?.available  &&
                <div className="reservation-reserve">
                    <Button
                        value="Zarezerwuj"
                        onClick={() => handleReserve()}
                        type={EButtonTypeList.PRIMARY}
                    />
                </div>
            }
        </div>
    )
}

export default ReservationTimetable