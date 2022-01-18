import './../Styles/ReservationMenu.scss'
import IReservationMenuProps from "../Types/IReservationMenuProps";
import EReservationType from "../Utils/EReservationType";
import ReservationMenuItem from "./ReservationMenuItem";
import {useState} from "react";

const ReservationMenu = ({onReservationSelected}: IReservationMenuProps) => {
    const [selectedType, setSelectedType] = useState<string>(EReservationType[EReservationType.LAUNDRY])

    const handleReservationSelected = (type: string) => {
        setSelectedType(type)
        onReservationSelected(type)
    }

    return (
        <div className="reservation-menu-wrapper">
            <p className="reservation-menu-header">Rezerwacje</p>
            {
                Object.keys(EReservationType).map(
                    (type) => (
                        <ReservationMenuItem
                            type={type}
                            selectedType={selectedType}
                            onReservationSelected={() => handleReservationSelected(type)}
                        />
                    )
                )
            }
        </div>
    )
}

export default ReservationMenu