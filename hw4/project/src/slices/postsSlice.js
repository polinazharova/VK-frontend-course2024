import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        addPost(state, action) {
            state.posts.push(action.payload)
        },
        deleteComment(state, action) {
            state.posts = state.posts.filter(
                post => !(post.id === action.payload.id)
            );
        }
    }
})


export const { addPost, deletePost, setPosts } = postsSlice.actions;
export default postsSlice.reducer;