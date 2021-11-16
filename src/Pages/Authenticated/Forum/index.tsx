import React from 'react';
import './Styles/Forum.scss'
import Post from "../../../Components/Post";
import image from "Assets/Images/image.jpg"

const Forum = (): JSX.Element => {

    return (
        <div className="forum-wrapper">
            <Post content={'aaa'} image={image} date={'01-01-2000'} likes={11} photo={image} username={'Vinc'}/>
        </div>
    );
};

export default Forum;