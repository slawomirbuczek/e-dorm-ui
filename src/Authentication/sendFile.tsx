import EApiMethods from "Utils/Types/EApiMethods"
import axiosInstance from "./axios"

const sendFile = (method: EApiMethods, url: string, data: FormData): Promise<any> => axiosInstance({
    method,
    url,
    data,
    headers: {"Content-Type": "multipart/form-data"},
}).then(({data}) => data).catch(error => error)

export default sendFile