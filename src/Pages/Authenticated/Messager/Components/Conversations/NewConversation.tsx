import "../../Styles/Conversations/NewConversation.scss"
import INewConservationProps from "../../Types/Conversations/INewConservationProps"
import {useEffect, useState} from "react"
import INewConversationUser from "../../Types/Conversations/INewConversationUser"
import sendRequest from "../../../../../Requests/sendRequest"
import EApiMethods from "../../../../../Utils/Types/EApiMethods"
import Select from "../../../../../Components/Form/Select/Select"
import mapUsersToSelectOptions from "../../Utils/mapUsersToSelectOptions"
import Button from "../../../../../Components/Button"
import EButtonTypeList from "../../../../../Components/Button/Types/EButtonTypeList"

const NewConversation = ({onNewConversationAdded}: INewConservationProps) => {
    const [users, setUsers] = useState<INewConversationUser[]>([])
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const result = await sendRequest(EApiMethods.GET, '/conversations/users')
        setUsers(result)
    }

    const addNewConversation = async () => {
        const {newConversationId} = await sendRequest(EApiMethods.POST, '/conversations/' + selectedUserId)
        newConversationId && onNewConversationAdded(newConversationId)
    }

    return (
        <div className="new-conversation-wrapper">
            <p className="new-conversation-header">Rozpocznij nową konwersację:</p>
            <Select
                onChange={(userId) => setSelectedUserId(userId as number)}
                options={mapUsersToSelectOptions(users)}
                header="Wybierz użytkownika:"
            />
            <Button
                value="Wybierz"
                onClick={() => selectedUserId && addNewConversation()}
                type={EButtonTypeList.SECONDARY}
            />
        </div>
    )
}

export default NewConversation