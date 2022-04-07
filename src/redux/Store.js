import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import titleReducer from "./TitleSlice"
import contentReducer from "./PostsContentSlice"

export default configureStore ({
    reducer:{
        user: userReducer,
        title: titleReducer,
        content: contentReducer,
    },
    
})
