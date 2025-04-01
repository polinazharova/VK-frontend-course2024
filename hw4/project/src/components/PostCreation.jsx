import React, {useContext, useRef } from 'react';
import { PostsContext } from '../context/PostsContext';
import Preloader from './Preloader';

const PostCreation = () => {
    const formRef = useRef();
    const inputBodyRef = useRef();
    const inputTitleRef = useRef();
    const inputImgRef = useRef();
    
    const [posts, setPosts] = useContext(PostsContext);


    if (posts.length === 0) {
        return (
            <Preloader />
        );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputBodyRef.current && inputTitleRef.current && inputImgRef.current) {
            const newPost = {
                id: posts[posts.length - 1].id + 1,
                title: inputTitleRef.current.value,
                body: inputBodyRef.current.value,
                date: new Date().toISOString().split('T')[0],
                image: inputImgRef.current.value
            }

            posts.push(newPost);
            setPosts(posts);
        } 

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <div id="post-creation">
            <p className="post-creation__title">Post creation</p>
            <form onSubmit={onSubmit} ref={formRef} className="post-creation__form" action="...">
                <input ref={inputTitleRef} className="post-creation__input-title comments__input" placeholder="Enter a post's title" />
                <input ref={inputBodyRef} className="post-creation__input-body comments__input" placeholder="Enter a post's text" />
                <input ref={inputImgRef} className="post-creation__input-img comments__input" placeholder="Enter a post's image link"/>
                <button type="submit" className="post-creation__button comments__form-button button">Create</button>
            </form>
        </div>
    );
}

export default PostCreation;