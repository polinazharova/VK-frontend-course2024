import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const FeedItem = (props) => {
    const post = props.item;

    if (!post) {
        return <div className="feed-item">No data available</div>; 
    }

    const [text, setText] = useState(post.body);

    useEffect(() => {
        let wordsArr = text.split(' ');

        if (wordsArr.length > 5) {
            const newText = wordsArr.slice(0, 5).join(' ');
            setText(newText + '...'); 
        }
    }, [post.body]); 

    const navigate = useNavigate();

    return (
        <>
        <div className="feed-item" id={post.id}>
            <div className="feed-item__tomp-comp">
                <h3 className="feed-item__title">{post.title}</h3>
                <p className="feed-item__date">{post.date}</p>
            </div>
            {text === post.body ? <p className="feed-item__body">{text}</p> : <p className="feed-item__body">{text}<Link className="feed-item__body-link" to={"/post/" + post.id}> see more</Link></p>}
            <div className="feed-item__img-wrapper">
                <img className="feed-item__image" src={post.image} alt="feed item image" />
            </div>
            <button onClick={() => {navigate(`/post/${post.id}`)}} className="button" type="button">Open</button>
        </div>
        <div className='divider'></div>
        </>
    );
}

export default FeedItem;