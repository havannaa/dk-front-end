import {createSlice} from "@reduxjs/toolkit";

export const pageTitleSlice = createSlice({
    name: 'pageTitle',
    initialState: {
        title: ''
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = action.payload
        },
    }
    }
)
export const {changeTitle} = pageTitleSlice.actions
export default pageTitleSlice.reducer