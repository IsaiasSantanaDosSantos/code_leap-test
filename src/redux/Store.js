import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import postListReducer from "./PostListSlice"

export default configureStore ({
    reducer:{
        user: userReducer,
        postList: postListReducer,
    },
    
})
