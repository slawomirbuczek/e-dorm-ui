import "./../Styles/RentHistory.scss";
import {useEffect, useState} from "react";
import sendRequest from "../../../../Requests/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import IRentHistory from "../Types/IRentHistory";
import RentHistoryItem from "./RentHistoryItem";
import IRentHistoryProps from "../Types/IRentHistoryProps";

const RentHistory = ({rentedItemId}: IRentHistoryProps) => {
    const [rentHistory, setRentHistory] = useState<IRentHistory[]>([]);

    useEffect(() => {
        const getRentHistory = async () => {
            const rentableItemImage = await sendRequest(
                EApiMethods.GET, '/rent-history'
            )
            setRentHistory(rentableItemImage)
        }

        getRentHistory()
    }, [rentedItemId])

    return (
        <div className="rental-history-wrapper">
            <p className="rental-history-header">Historia wypożyczeń</p>
            {
                rentHistory.map(
                    (rentHistoryItem) => (
                        <RentHistoryItem rentHistoryItem={rentHistoryItem}/>
                    )
                )
            }
        </div>
    )
}

export default RentHistory