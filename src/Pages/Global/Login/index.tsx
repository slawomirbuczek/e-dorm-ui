import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"
import FormInput from "Components/Form/Input"
import EInputTypes from "Components/Form/Input/Types/EInputTypes"
import {useContext, useRef, useState} from "react"
import ILoginCredentials from "./Types/ILoginCredentials"
import {Link, useHistory} from "react-router-dom"
import {TokenContext} from "Context/Token"
import IValidators from "./Types/IValidators"
import checkValidation from "../Register/Functions/checkValidation"
import MessageToTheUser from "./Components/MessageToTheUser"
import IMessageToTheUser from "../Register/Types/IMessageToTheUser"
import checkIfCanLogIn from "./Functions/checkIfCanLogIn"
import "./Styles/Login.scss"
import Footer from "../../../Components/Footer"

const Login = (): JSX.Element => {
    const {loginUser} = useContext(TokenContext)
    const [loginCredentials, setUpLoginCredentials] = useState<ILoginCredentials>({
        email: "",
        password: "",
    })
    const [validators, setValidators] = useState<IValidators>({
        password: [],
        email: []
    })
    const userMessageRef = useRef<null | HTMLDivElement>(null)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        isSuccess: false,
        message: ''
    })
    const history = useHistory()

    const onLoginUser = async () => {
        const data = {...loginCredentials}

        const result = loginUser && await loginUser(data)

        if (!result) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'Incorrect username or password'
            })
        }

        const {isSuccess} = result

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'Incorrect username or password'
            })
        }

        return history.push('/dashboard')
    }

    const onLoginIn = async () => {
        const canCreate = checkIfCanLogIn(validators) && (email && password)

        if (!canCreate) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to fill all of the fields'
            })
        }

        return onLoginUser()
    }

    const updateLoginCredentials = (key: string, value: string) => {
        setUpLoginCredentials((prevState) => ({
            ...prevState,
            [key]: value,
        }))
    }

    const goThroughValidators = (key: string, value: string) => {
        const validations = checkValidation(key, value)

        setValidators(prevState => ({
            ...prevState,
            [key]: validations
        }))

        return updateLoginCredentials(key, value)
    }

    const forgotPasswordHeader = <Link to="/forgot-password" tabIndex={-1}>Forgot your password?</Link>

    const {email, password} = loginCredentials

    return (
        <div className="login-page-wrapper" ref={userMessageRef}>

            <div className="top">
                <Link to="/login">
                    <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="logo"/>
                </Link>
                <h1>Sign in to Virtual Dormitory</h1>
                <p>
                    By continuing, you agree to our{" "}
                    <Link to={"/terms"}>User Agreement</Link>
                    {" "}and{" "}
                    <Link to="/privacy">Privacy Policy</Link>
                </p>
            </div>

            <MessageToTheUser {...messageToTheUser} />

            <div className="content-container">
                <div className="input-container">
                    <FormInput
                        value={email}
                        onChange={value => goThroughValidators('email', value)}
                        type={EInputTypes.TEXT}
                        header="Email"
                    />
                </div>
                <div className="input-container">
                    <FormInput
                        value={password}
                        onChange={value => goThroughValidators('password', value)}
                        type={EInputTypes.PASSWORD}
                        header="Password"
                        headerChildren={forgotPasswordHeader}
                    />
                </div>
                <Button
                    type={EButtonTypeList.PRIMARY}
                    onClick={onLoginIn}
                    value="Login"
                />
            </div>
            <div className="additional-info">
                <p>Don’t have an account yet?</p>
                <Link to="/register">Create an account</Link>
            </div>

            <Footer/>

        </div>
    )
}

export default Login
