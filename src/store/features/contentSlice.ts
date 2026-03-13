import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
    name: "content",
    initialState: {
        value: 0,
    },
    reducers: {
        setContent: (_state, action) => {
            return action.payload;
        },
    },
});

export const { setContent } = contentSlice.actions;

export default contentSlice.reducer;
