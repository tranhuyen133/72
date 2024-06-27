import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/useReducer";
//đi tạo kho 
const store = configureStore({
    reducer:{
        user:useReducer,
    },
});