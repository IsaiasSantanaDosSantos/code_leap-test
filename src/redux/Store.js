import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import postListReducer from "./postListSlice"

export default configureStore ({
    reducer:{
        user: userReducer,
        postList: postListReducer,
    },
    
})
