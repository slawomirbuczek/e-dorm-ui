import "./../Styles/ItemDetails.scss"
import IItemDetailsProps from "../Types/IItemDetailsProps";
import getImageFromResponse from "../../../../Utils/Functions/getImageFromResponse";
import Button from "../../../../Components/Button";
import EButtonTypeList from "../../../../Components/Button/Types/EButtonTypeList";
import {useEffect, useState} from "react";
import sendRequest from "../../../../Authentication/sendRequest";
import EApiMethods from "../../../../Utils/Types/EApiMethods";
import IRentableItemImage from "../Types/IRentableItemImage";

const ItemDetails = ({rentableItem, onItemRented}: IItemDetailsProps) => {
    const [rentableItemImage, setRentableItemImage] = useState<IRentableItemImage | null>(null)
    const [itemAvailable, setItemAvailable] = useState<boolean | null>(null)


    useEffect(() => {
        if (!rentableItem) {
            return
        }

        const getRentableItemImage = async () => {
            const rentableItemImage = await sendRequest(
                EApiMethods.GET, '/rentable-items/' + rentableItem.id + "/image"
            )
            setRentableItemImage(rentableItemImage)
            setItemAvailable(rentableItem.available)
        }

        getRentableItemImage()
    }, [rentableItem])


    const handleRentItem = async () => {
        if (!rentableItem) {
            return
        }

        await sendRequest(
            EApiMethods.POST, '/rent-history/' + rentableItem.id
        )
        onItemRented(rentableItem.id)
        setItemAvailable(false)
    }

    return (
        <div className="item-details-wrapper">
            <p>{rentableItem?.name}</p>
            {
                rentableItemImage &&
                <img src={getImageFromResponse(rentableItemImage.image)} alt="item"/>
            }
            {
                itemAvailable &&
                <Button
                    value="Wypożycz"
                    onClick={() => handleRentItem()}
                    type={EButtonTypeList.PRIMARY}
                />
            }
        </div>
    )
}

export default ItemDetails