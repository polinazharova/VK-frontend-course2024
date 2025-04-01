import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../slices/commentsSlice';

const FormAddingComments = ({postId, lastCommentId}) => {
    const formRef = useRef();
    const inputBodyRef = useRef();
    const inputNameRef = useRef();

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputBodyRef.current && inputNameRef.current) {
            const newComment = {
                postId,
                commentId: lastCommentId + 1,
                name: inputNameRef.current.value,
                body: inputBodyRef.current.value,
                date: new Date().toLocaleString('ru-RU')
            };
            
            dispatch(addComment(newComment))
        } 

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <form ref={formRef} onSubmit={onSubmit} className="comments__form form" action="...">
            <input ref={inputBodyRef} className="comments__input-comment comments__input" type="text" placeholder="Enter a comment" />
            <div className="comments__form-bottom-comp">
                <input ref={inputNameRef} className="comments__input-name comments__input" type="text" placeholder="Enter your name" />
                <button type="submit" className="comments__form-button button">Send a comment</button>
            </div>
        </form>
    );
}

export default FormAddingComments;