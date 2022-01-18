import IReservation from "./IReservation";

export default interface IReservationHistoryProps {
    type: string
    reserved: IReservation | null
}