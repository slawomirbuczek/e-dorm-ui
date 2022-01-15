import "./../Styles/RentHistoryItem.scss";
import IRentHistoryItemProps from "../Types/IRentHistoryItemProps";
import parseDateToSelectedFormat from "../../../../Utils/Functions/parseDateToSelectedFormat";
import {EParseDateMethods} from "../../../../Utils/Types/EParseDateMethods";

const RentHistoryItem = ({rentHistoryItem}: IRentHistoryItemProps) => {

    const {name, rentDate, returnDate} = rentHistoryItem

    return (
        <div className="rent-history-item-wrapper">
            <p><strong>Nazwa:</strong> {name}</p>
            <p>
                <strong>Wypożyczono:</strong> {parseDateToSelectedFormat(
                new Date(rentDate), EParseDateMethods.HHMMSS_DD_MM_YYYY
            )}
            </p>
            <p>
                <strong>Zwrócono:</strong> {returnDate
                ? +parseDateToSelectedFormat(
                    new Date(rentDate), EParseDateMethods.HHMMSS_DD_MM_YYYY
                )
                : "-"}

            </p>
        </div>
    )
}

export default RentHistoryItem