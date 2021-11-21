import Post from "./Components/Post";
import ITopic from "./Types/ITopic";
import './Styles/Topic.scss';

const Topic = ({forum}: ITopic) => {

    const {topic, responses} = forum;

    return (
        <div className="topic-wrapper">
            <div className="topic-container">
                <Post post={topic}/>
            </div>
            <div className="responses-container">
                {
                    responses.map(
                        (response) => (
                            <Post post={response}/>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Topic;