export default interface IComment {
    postId: number
    fullName: string
    createDate: string
    edited: boolean
    content: string
    image: string | null
    photo: string | null
}