import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../slices/commentsSlice'
import postsReducer from '../slices/postsSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    }
});

export default store;