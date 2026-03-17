import {
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";
import enContent from "../../cdn/enContent";
import type { RootState } from "..";
// import esContent from "../../cdn/esContent";

export const contentSlice = createSlice({
    name: "content",
    initialState: enContent,
    reducers: {
        setContent: (_state, action) => {
            return action.payload;
        },
    },
});

export const selectStories = createSelector(
    (state: RootState) => state.content.stories.items,
    (stories) => stories.slice(0, 4)
);
export const selectFeatures = createSelector(
    (state: RootState) => state.content.features.items,
    (features) => features.slice(0, 3)
);

export const { setContent } = contentSlice.actions;

export default contentSlice.reducer;
