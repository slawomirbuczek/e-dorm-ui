import './Styles/Forum.scss'
import React from 'react'
import Topics from "./Components/topics/Topics";
import NewTopic from "./Components/topics/NewTopic";

const Forum = (): JSX.Element => {


    return (
        <div className="forum-wrapper">
            <Topics/>
        </div>
    )
}

export default Forum