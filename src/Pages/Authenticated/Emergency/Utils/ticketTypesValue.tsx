import ETicketType from "../Types/Tickets/ETicketType"

export const getValueFromTicketType = (type: ETicketType) => {
    switch (type) {
        case ETicketType.NETWORK:
            return "Zgłoszenie sieciowe"
        case ETicketType.SERVICE:
            return "Zgłoszenie serwisowe"
        default:
            return "Zgłoszenie administracyjne"
    }
}

export default getValueFromTicketType