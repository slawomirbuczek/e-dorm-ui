import INewConversationUser from "../Types/Conversations/INewConversationUser"
import ISingleOption from "../../../../Components/Form/Select/Types/ISingleOption"

const mapUsersToSelectOptions = (users: INewConversationUser[]) => {
    const options: ISingleOption[] = [{value: '', label:''}]
    const userOptions = users.map((user) => ({
        value: user.id,
        label: user.name
    }))
    return [...options, ...userOptions]
}

export default mapUsersToSelectOptions