import React, {useEffect, useState} from 'react';
import Topic from "../../../Components/Topic";
import EApiMethods from "../../../Utils/Types/EApiMethods";
import sendRequest from "../../../Authentication/sendRequest";
import './Styles/Forum.scss';
import IForum from "./Types/IForum";

const Forum = (): JSX.Element => {
    const [forums, setForums] = useState<IForum[] | null>(null);

    useEffect(() => {
        const getData = async () => {
            const result = await sendRequest(EApiMethods.GET, '/posts');

            return setForums(result);
        };

        getData();
    }, []);

    return (
        <div className="forum-wrapper">
            {
                forums && forums.map(
                    (forum) => (
                        <Topic forum={forum}/>
                    )
                )
            }
        </div>
    );
};

export default Forum;