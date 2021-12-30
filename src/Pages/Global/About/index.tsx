import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import React from 'react'
import {useHistory} from 'react-router'
import GlobalPageTemplate from 'Templates/GlobalPage'

import './Styles/About.scss'

const About = () => {
    const history = useHistory()

    const goBack = () => {
        return history.goBack()
    }

    return (
        <GlobalPageTemplate information="About">
            <div className="about-page-wrapper">
                <Button
                    type={EButtonTypeList.PRIMARY}
                    value="Go Back"
                    onClick={goBack}
                />
            </div>
        </GlobalPageTemplate>
    )
}

export default About