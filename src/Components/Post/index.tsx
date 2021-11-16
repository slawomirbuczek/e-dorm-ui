import React from 'react';
import './Styles/Post.scss';
import IPost from './Types/IPost';

const Post = (props: IPost): JSX.Element => {
    const {photo, username, likes, content, date, image} = props;

    return (
        <div className="post-wrapper">
            <div className="post-container">
                <div className="post-info">
                    <img className="photo" src={photo} alt="user"/>
                    <p className="username">{username}</p>
                    <p className="date">{date}</p>
                    <p className="likes">+{likes}</p>
                </div>
                <div className="post-content">
                    <p className="text">{content}</p>
                    <img className="image" src={image} alt="content"/>
                </div>
            </div>
        </div>
    );
};

export default Post;