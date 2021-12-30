import {EParseDateMethods} from "Utils/Types/EParseDateMethods"

const checkNumberValue = (number: number) => number < 10 ? `0${number}` : number

const parseDateToSelectedFormat = (date: Date, format: EParseDateMethods): string => {

    const hours = checkNumberValue(date.getHours())
    const minutes = checkNumberValue(date.getMinutes())
    const seconds = checkNumberValue(date.getSeconds())

    const year = date.getFullYear()
    const month = checkNumberValue(date.getMonth() + 1)
    const day = checkNumberValue(date.getDate())

    if (format === EParseDateMethods.HHMM) {
        return `${hours}:${minutes}`
    } else if (format === EParseDateMethods.YYYY_MM_DD) {
        return `${year}-${month}-${day}`
    } else if (format === EParseDateMethods.HHMMSS_DD_MM_YYYY) {
        return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`
    }

    return ''
}

export default parseDateToSelectedFormat