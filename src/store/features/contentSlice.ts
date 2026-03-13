import { createSlice } from "@reduxjs/toolkit";
import { enContent } from "../../cdn/enContent";
// import { esContent } from "../../cdn/esContent";

export const contentSlice = createSlice({
    name: "content",
    initialState: enContent,
    reducers: {
        setContent: (_state, action) => {
            return action.payload;
        },
    },
});

export const { setContent } = contentSlice.actions;

export default contentSlice.reducer;
