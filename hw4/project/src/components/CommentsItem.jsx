import React from 'react';
import trashCanIcon from '../assets/trash-can.png';
import { deleteComment } from '../slices/commentsSlice';
import { useDispatch } from 'react-redux';

const CommentsItem = ({comment}) => {
    const dispatch = useDispatch();

    return (
        <div className="comment">
            <div className="comment__comp" id={comment.commentId}>
                <h4 className="comment__name feed-item__title">{comment.name}</h4>
                <p className="comment__body feed-item__body">{comment.body}</p>
                <p className="comment__date feed-item__date">{comment.date}</p>
            </div>
            <img onClick={() => {
                dispatch(deleteComment({commentId: comment.commentId, postId: comment.postId}));
                }} className="comment__trash-can-icon" src={trashCanIcon} alt="comment deleting icon" 
            />
        </div>
    );
}

export default CommentsItem;