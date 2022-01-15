import './Styles/Forum.scss'
import React from 'react'
import Topics from "./Components/topics/Topics";

const Forum = (): JSX.Element => {


    return (
        <div className="forum-wrapper">
            <Topics/>
        </div>
    )
}

export default Forum