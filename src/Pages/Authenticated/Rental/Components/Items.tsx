import "./../Styles/Items.scss"
import {useEffect, useState} from "react";
import sendRequest from "../../../../Requests/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import IRentableItem from "../Types/IRentableItem";
import Item from "./Item";
import IItemsProps from "../Types/IItemsProps";
import ERentableItemType from "../Utils/ERentableItemType";

const Items = ({rentedItemId, onItemSelected}: IItemsProps) => {
    const [householdsItems, setHouseholdsItems] = useState<IRentableItem[]>([])
    const [sportsItems, setSportsItems] = useState<IRentableItem[]>([])
    const [selectedItemId, setSelectedItemId] = useState<number>(-1)

    useEffect(() => {
        const getRentableItems = async () => {
            const householdsItems = await sendRequest(
                EApiMethods.GET, '/rentable-items/' + ERentableItemType.HOUSEHOLDS.valueOf()
            )
            setHouseholdsItems(householdsItems)

            const sportsItems = await sendRequest(
                EApiMethods.GET, '/rentable-items/' + ERentableItemType.SPORTS.valueOf()
            )
            setSportsItems(sportsItems)
        }


        getRentableItems()
    }, [rentedItemId])

    const handleSelectedItem = (rentableItem: IRentableItem) => {
        onItemSelected(rentableItem)
        setSelectedItemId(rentableItem.id)
    }

    return (
        <div className="items-wrapper">
            <p className="items-header">Artykuły gospodarstwa domowego</p>
            {
                householdsItems.map(
                    (rentableItem) => (
                        <Item
                            rentableItem={rentableItem}
                            selectedItemId={selectedItemId}
                            onItemSelected={() => handleSelectedItem(rentableItem)}
                        />
                    )
                )
            }
            <div className="items-border"/>
            <p className="items-header">Sprzęt sportowy</p>
            {
                sportsItems.map(
                    (rentableItem) => (
                        <Item
                            rentableItem={rentableItem}
                            selectedItemId={selectedItemId}
                            onItemSelected={() => handleSelectedItem(rentableItem)}
                        />
                    )
                )
            }
        </div>
    )
}

export default Items