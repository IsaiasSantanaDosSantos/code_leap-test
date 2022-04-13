import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import postListReducer from "./postListSlice"

export default configureStore ({
    reducer:{
        user: userReducer,
        postList: postListReducer,
    },
    
})
