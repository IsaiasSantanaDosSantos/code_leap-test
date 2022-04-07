import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import titleReducer from "./TitleSlice"

export default configureStore ({
    reducer:{
        user: userReducer,
        title: titleReducer,
    },
    
})
