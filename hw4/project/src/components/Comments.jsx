import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CommentsItem from './CommentsItem';
import FormAddingComments from './FormAddingComments';

const Comments = ({postId}) => {
    const comments = useSelector(state => state.comments.comments);
    console.log(comments);

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('comments', JSON.stringify(comments));
        });
    }, [comments])
    

    const postComments = useMemo(() => (
        comments.filter(comment => comment.postId === postId) // usememo на случай редактирования коммента
    ), [comments]);

    if (postComments.length === 0) {
        return (
            <div className="comments">
                <p className="comments__title feed-item__title">Comments</p>
                <FormAddingComments postId={postId} lastCommentId={0} />
                <p className="comments__no-comments-title feed-item__title">No comments yet...</p>
            </div>
        );
    }

    const lastCommentId = postComments[0].commentId
 
    return (
        <div className="comments">
            <p className="comments__title feed-item__title">Comments</p>
            <FormAddingComments postId={postId} lastCommentId={lastCommentId} />
            {postComments.map(comment => (
                <CommentsItem key={comment.commentId} comment={comment} />
            ))}
        </div>
    );
}

export default Comments;