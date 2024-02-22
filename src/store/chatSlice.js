import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utilis/constant";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {chatMessage: []},
    reducers: {
        addLiveChatMessages: (state, action) => {
            state.chatMessage.splice(LIVE_CHAT_COUNT, 1)
            state.chatMessage.push(action.payload)
        }
    }
});

export const {addLiveChatMessages} = chatSlice.actions;

export default chatSlice.reducer;