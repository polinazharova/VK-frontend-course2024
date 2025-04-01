import { createSlice } from '@reduxjs/toolkit';

let initComments = localStorage.getItem('comments');

if (initComments) {
    initComments = JSON.parse(initComments);
} else {
    initComments = [];
}

const initialState = {
    comments: initComments
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state, action) {
            state.comments.unshift(action.payload)
        },
        deleteComment(state, action) {
            state.comments = state.comments.filter(
                comment => !(comment.commentId === action.payload.commentId && comment.postId === action.payload.postId)
            );
        }
    }
})


export const { addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;