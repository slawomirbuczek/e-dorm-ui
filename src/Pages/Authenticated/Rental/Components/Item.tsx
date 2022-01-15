import "./../Styles/Item.scss"
import IItemProps from "../Types/IItemProps";

const Item = ({rentableItem, selectedItemId, onItemSelected}: IItemProps) => {

    const {id, name, available} = rentableItem

    return (
        <div
            className={`item-wrapper ${selectedItemId === id ? "selected" : ""}`}
            onClick={onItemSelected}
        >
            <div className="item-name">
                <p>{name}</p>
            </div>
            <div className={`item ${available ? "available" : "unavailable"}`}>
                <p>
                    {available ? 'Dostępny' : "Wypożyczony"}
                </p>
            </div>
        </div>
    )
}

export default Item