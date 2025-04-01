import React, {useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';
import Preloader from './Preloader';
import Comments from './Comments';

const Post = () => {
    const posts = useContext(PostsContext)[0];

    const {id} = useParams();

    if (posts.length === 0) {
        return (
            <Preloader />
        );
    }
    
    const post = posts[id - 1];

    return (
        <>
            <div className="feed-item feed-item_opened" id={post.id}>
                <div className="feed-item__tomp-comp">
                    <h3 className="feed-item__title">{post.title}</h3>
                    <p className="feed-item__date">{post.date}</p>
                </div>
                <p className="feed-item__body">{post.body}</p>
                <div className="feed-item__img-wrapper">
                    <img className="feed-item__image" src={post.image} alt="feed item image" />
                </div>
            </div>
            <Comments postId={id} />
        </>
    )
}

export default Post;