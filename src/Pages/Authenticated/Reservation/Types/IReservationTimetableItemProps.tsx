import IReservation from "./IReservation";

export default interface IReservationTimetableItemProps {
    reservation: IReservation
    selectedReservation: IReservation | null
    onReservationSelected: () => void
}