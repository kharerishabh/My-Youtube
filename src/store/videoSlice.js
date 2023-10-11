import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: []
    },
    reducers:{
        fetchVideo: (state, actions) => {
            state.videos = actions.payload
        }
    }
})

export const {fetchVideo} = videoSlice.actions;

export default videoSlice.reducer;