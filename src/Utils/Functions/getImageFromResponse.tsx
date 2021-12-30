import avatar from "Assets/Images/avatar.png"

const getImageFromResponse = (photo?: string | null) => {

    return photo ? `data:image/png;base64,${photo}` : avatar
}

export default getImageFromResponse