import {useState} from 'react';
import ISignUpCredentials from './Types/ISignUpCredentials';
import Button from 'Components/Button';
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList';
import FormInput from 'Components/Form/Input';
import EInputTypes from 'Components/Form/Input/Types/EInputTypes';
import FormCheckbox from 'Components/Form/Checkbox';
import {Link} from 'react-router-dom';
import checkIfCanCreateAccount from './Functions/checkIfCanCreateAccount';
import sendRequest from 'Authentication/sendRequest';
import EApiMethods from 'Utils/Types/EApiMethods';
import IMessageToTheUser from './Types/IMessageToTheUser';
import MessageToTheUser from './Components/MessageToTheUser';
import checkValidation from './Functions/checkValidation';
import './Styles/Register.scss';
import IValidators from './Types/IValidators';
import Footer from "../../../Components/Footer";
import InputValidatorMessages from "./Components/InputValidatorMessages";

const Register = (): JSX.Element => {
    const [signUpCredentials, setSignUpCredentials] = useState<ISignUpCredentials>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthday: ''
    });
    const [agreeWithTerms, setAgreeWithTerms] = useState<boolean>(false);
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        isSuccess: false,
        message: ''
    });
    const [validators, setValidators] = useState<IValidators>({
        password: [],
        email: [],
        firstName: [],
        lastName: [],
        phoneNumber: [],
        birthday: []
    });

    const {email, password, firstName, lastName, phoneNumber, birthday} = signUpCredentials;

    const updateSignUpCredentials = (key: string, value: string) => {
        return setSignUpCredentials(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const onSignUp = async () => {
        const data = {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            birthday
        };

        const {isSuccess, message} = await sendRequest(EApiMethods.POST, '/registration', data);

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message
            });
        }

        setMessageToTheUser({
            isSuccess: true,
            message: 'Account have been created'
        });
    };

    const onCreateAccount = async () => {
        const canCreate = checkIfCanCreateAccount(validators) && (email && password && firstName && lastName && phoneNumber && birthday);

        if (!agreeWithTerms && !canCreate) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to agree with terms and fill all of the fields'
            });
        }

        if (!agreeWithTerms && canCreate) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to agree with terms'
            });
        }

        if (!canCreate) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to fill all of the fields'
            });
        }

        setMessageToTheUser({
            isSuccess: false,
            message: ''
        });

        return onSignUp();
    };

    const goThroughValidators = (key: string, value: string) => {
        const validations = checkValidation(key, value);

        setValidators(prevState => ({
            ...prevState,
            [key]: validations
        }));

        return updateSignUpCredentials(key, value);
    };

    return (
        <div className="register-page-wrapper">

            <Link to="/login">
                <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="logo"/>
            </Link>

            <h1>Sign up to Virtual Dormitory</h1>

            <MessageToTheUser {...messageToTheUser} />

            <div className="content-container">
                <div className="form">
                    <div className="input-container">
                        <InputValidatorMessages inputValidator={validators.email}/>
                        <FormInput
                            value={email}
                            onChange={value => goThroughValidators('email', value)}
                            type={EInputTypes.TEXT}
                            header="Email"
                        />
                    </div>
                    <div className="input-container">
                        <InputValidatorMessages inputValidator={validators.password}/>
                        <FormInput
                            value={password}
                            onChange={value => goThroughValidators('password', value)}
                            type={EInputTypes.PASSWORD}
                            header="Password"
                        />
                    </div>
                    <div className="input-container">
                        <InputValidatorMessages inputValidator={validators.firstName}/>
                        <FormInput
                            value={firstName}
                            onChange={value => goThroughValidators('firstName', value)}
                            type={EInputTypes.TEXT}
                            header="First name"
                        />
                    </div>
                    <div className="input-container">
                        <InputValidatorMessages inputValidator={validators.lastName}/>
                        <FormInput
                            value={lastName}
                            onChange={value => goThroughValidators('lastName', value)}
                            type={EInputTypes.TEXT}
                            header="Last name"
                        />
                    </div>
                    <div className="input-container">
                        <InputValidatorMessages inputValidator={validators.phoneNumber}/>
                        <FormInput
                            value={phoneNumber}
                            onChange={value => goThroughValidators('phoneNumber', value)}
                            type={EInputTypes.TEXT}
                            header="Phone number"
                        />
                    </div>
                    <div className="input-container">
                        <InputValidatorMessages inputValidator={validators.birthday}/>
                        <FormInput
                            value={birthday}
                            onChange={value => goThroughValidators('birthday', value)}
                            type={EInputTypes.DATE}
                            header="Birthday"
                        />
                    </div>
                    <FormCheckbox
                        value={agreeWithTerms}
                        onChange={value => setAgreeWithTerms(value)}
                        header={
                            <p>
                                I agree to{" "}
                                <Link to={"/terms"}>User Agreement</Link>
                                {" "}and{" "}
                                <Link to="/privacy">Privacy Policy</Link>
                            </p>
                        }
                    />
                </div>
                <Button
                    type={EButtonTypeList.PRIMARY}
                    onClick={onCreateAccount}
                    value="Create account"
                />

            </div>
            <Footer/>
        </div>
    );
};

export default Register;