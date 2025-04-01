import React, { useContext, useMemo } from 'react';
import FeedItem from './FeedItem';
import { PostsContext } from '../context/PostsContext';
import { HeaderFormContext } from '../context/HeaderFormContext';
import postsFiltration from '../utils/postsFiltration';
import Preloader from './Preloader';

const Feed = () => {
    const [formInput] = useContext(HeaderFormContext);
    const [posts] = useContext(PostsContext);

    console.log(posts);

    const filtredPosts = useMemo(() => {
        return formInput ? postsFiltration(posts, formInput) : posts;
    }, [posts, formInput]);

    if (posts.length === 0) {
        return (
            <Preloader />
        );
    }

    if (filtredPosts.length === 0) {
        return (
            <div id="feed">
                <p>Ничего не найдено</p>
            </div>
        )
    }
 
    return (
        <div id="feed">
            {filtredPosts.slice().reverse().map(elem => (
                <FeedItem key={elem.id} item={elem} />
            ))}
        </div>
    );
}

export default Feed;