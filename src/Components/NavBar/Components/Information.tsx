import {appName, appShortcutName} from 'Utils/Constants/appInfo';
import checkIsMobileView from 'Utils/Functions/checkIsMobileView';
import useWindowSize from 'Utils/Functions/useWindowSize';

const Information = () => {
    const {width} = useWindowSize();
    const isMobileView = checkIsMobileView(width);

    return (
        <div className="information">
            <h1>{isMobileView ? appShortcutName : appName}</h1>
        </div>
    );
};

export default Information;