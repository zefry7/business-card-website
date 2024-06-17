import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./reducer/portfolioReducer";

const store = configureStore({
    reducer: {
        // *nameReducer*: *reducer*,
        "portfolioReducer": portfolioReducer,
    }
})

export default store