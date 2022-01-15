import "./Styles/Rental.scss"
import Items from "./Components/Items";
import {useState} from "react";
import ItemDetails from "./Components/ItemDetails";
import IRentableItem from "./Types/IRentableItem";
import RentHistory from "./Components/RentHistory";

const Rental = () => {
    const [selectedItem, setSelectedItem] = useState<IRentableItem | null>(null)
    const [rentedItemId, setRentedItemId] = useState<number | null>(null)

    return (
        <div className="rental-wrapper">
            <Items
                onItemSelected={(rentableItem) => setSelectedItem(rentableItem)}
                rentedItemId={rentedItemId}
            />
            <ItemDetails
                rentableItem={selectedItem}
                onItemRented={(itemId) => setRentedItemId(itemId)}
            />
            <RentHistory rentedItemId={rentedItemId}/>
        </div>
    )
}

export default Rental