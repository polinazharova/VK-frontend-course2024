import React, { createContext, useState, useEffect } from 'react';
import getFeed from '../utils/getFeed';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getFeed(setPosts);
        }, 1500);
    }, []);

    return (
        <PostsContext.Provider value={[posts, setPosts]}>
            {children}
        </PostsContext.Provider>
    );
};
