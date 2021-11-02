import Button from 'Components/Button';
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList';
import React from 'react';
import {useHistory} from 'react-router';
import GlobalPageTemplate from 'Templates/GlobalPage';
import checkIsMobileView from 'Utils/Functions/checkIsMobileView';
import useWindowSize from 'Utils/Functions/useWindowSize';
import './Styles/Faq.scss';

const Faq = () => {
    const history = useHistory();
    const {width} = useWindowSize();
    const isMobileView = checkIsMobileView(width);

    const goBack = () => {
        return history.goBack();
    };

    return (
        <GlobalPageTemplate information="Frequently Asked Questions">
            <div className="faq-page-wrapper">
                {isMobileView && <Button
                    type={EButtonTypeList.PRIMARY}
                    value="Go Back"
                    onClick={goBack}
                />}
            </div>
        </GlobalPageTemplate>
    );
};

export default Faq;