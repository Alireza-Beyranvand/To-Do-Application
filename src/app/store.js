import { configureStore } from "@reduxjs/toolkit";
import jobRedducer from "../reducers/jobSlice";



const store = configureStore({
    reducer : {
jobs : jobRedducer ,
    }
});




export default store;