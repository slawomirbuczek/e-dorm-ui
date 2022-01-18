import IReservation from "./IReservation";

export default interface IReservationTimetableProps {
    selectedType: string
    onReserve: (reservation: IReservation) => void
}