import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer/globalReducer";

const store = configureStore({
    reducer: {
        "globalReducer": globalReducer
    }
})

export default store