import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./reducer/portfolioReducer";
import globalReducer from "./reducer/globalReducer";

const store = configureStore({
    reducer: {
        // *nameReducer*: *reducer*,
        "portfolioReducer": portfolioReducer,
        "globalReducer": globalReducer
    }
})

export default store