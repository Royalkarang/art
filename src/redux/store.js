"use client"
import { configureStore } from "@reduxjs/toolkit";
import allSlice from "./slices/allSlice.js";

const store = configureStore({
    reducer: {
        store : allSlice,
    },
    devTools: true
})

export default store;