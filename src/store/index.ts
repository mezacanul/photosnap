import { configureStore } from "@reduxjs/toolkit";
import contentSliceReducer from "./features/contentSlice";

export const store = configureStore({
    reducer: {
        content: contentSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
