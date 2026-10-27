import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import themeReducer from "./themeReducer";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: CounterReducer,
    }
});
export default store;