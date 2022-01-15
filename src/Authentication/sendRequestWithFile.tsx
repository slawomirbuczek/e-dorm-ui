import EApiMethods from "Utils/Types/EApiMethods"
import axiosInstance from "./axios"

const sendRequestWithFile = (method: EApiMethods, url: string, data?: FormData): Promise<any> => axiosInstance({
    method,
    url,
    data
}).then(({data}) => data).catch(error => error)

export default sendRequestWithFile