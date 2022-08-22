import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
    name: "guest",
    initialState: {
        list: []
    },
    reducers: {
        addGuest: (state, action) => {
            const newGuest = {
                name: action.payload.name ? action.payload.name : 'Anonymous',
                order: action.payload.order
            };
            state.list.push(newGuest)
        },
        deleteGuest: (state, action) => {
            state.list = state.list.filter(guest => guest.order !== action.payload)
        }
    }
}
)

export const { addGuest, deleteGuest } = guestSlice.actions;
export default guestSlice.reducer