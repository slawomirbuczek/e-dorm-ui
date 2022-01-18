import axiosInstance from 'Requests/axios'
import sendRequest from 'Requests/sendRequest'
import React, {createContext, useState} from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import ILogin from './Types/ILogin'
import IToken from './Types/IToken'
import IUseToken from './Types/IUseToken'

export const TokenContext = createContext<IToken>({})

const setTokenToTheAxiosConfig = (token?: string | null) => {
    if (!token && typeof token !== 'string') {
        return null
    }

    return axiosInstance.defaults.headers.common['Authorization'] = token
}

const checkLoginStatus = (): boolean => {
    const token = localStorage.getItem('token')

    setTokenToTheAxiosConfig(token)

    return !!token
}

export const UseToken = ({children}: IUseToken): JSX.Element => {
    const [isLoggedIn, setLoginStatus] = useState<boolean>(checkLoginStatus())

    const logoutUser = async () => {
        localStorage.removeItem('token')

        setLoginStatus(false)

        return true
    }

    const loginUser = async (credentials: ILogin) => {
        const data = {...credentials}

        const token = await sendRequest(EApiMethods.POST, '/login', data)

        if (typeof token !== 'string') {
            return {
                isSuccess: false,
                message: token.error
            }
        }

        axiosInstance.defaults.headers.common['Authorization'] = token

        localStorage.setItem('token', token)

        setLoginStatus(true)

        return {
            isSuccess: true
        }
    }

    return (
        <TokenContext.Provider value={{isLoggedIn, logoutUser, loginUser}}>
            {children}
        </TokenContext.Provider>
    )
}