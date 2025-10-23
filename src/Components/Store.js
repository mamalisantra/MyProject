import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import themeReducer from "./themeReducer";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        theme: themeReducer,
    }
});
export default store;