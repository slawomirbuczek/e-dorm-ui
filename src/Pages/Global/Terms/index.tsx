import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import React from 'react'
import {useHistory} from 'react-router'
import GlobalPageTemplate from 'Templates/GlobalPage'
import './Styles/Terms.scss'

const Terms = () => {
    const history = useHistory()

    const goBack = () => {
        return history.goBack()
    }

    return (
        <GlobalPageTemplate information="Terms of Use">
            <div className="terms-page-wrapper">
                <Button
                    type={EButtonTypeList.PRIMARY}
                    value="Go Back"
                    onClick={goBack}
                />
            </div>
        </GlobalPageTemplate>
    )
}

export default Terms