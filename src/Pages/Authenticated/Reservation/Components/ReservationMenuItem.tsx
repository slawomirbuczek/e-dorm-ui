import './../Styles/ReservationMenuItem.scss'
import IReservationMenuItemProps from "../Types/IReservationMenuItemProps";
import EReservationType from "../Utils/EReservationType";

const ReservationMenuItem = ({type, selectedType, onReservationSelected}: IReservationMenuItemProps) => {

    const getTypeName = (type: string) => {
        switch (type) {
            case EReservationType.BILLIARD:
                return "Bilard"
            case EReservationType.TV:
                return "Salka TV"
            default:
                return "Pralnia"
        }
    }

    return (
        <div
            className={`reservation-menu-item-wrapper ${selectedType === type ? 'selected' : ''}`}
            onClick={onReservationSelected}
        >
            <p>{getTypeName(type)}</p>
        </div>
    )
}

export default ReservationMenuItem