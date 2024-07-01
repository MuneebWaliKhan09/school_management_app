import { createSlice } from "@reduxjs/toolkit";





const themeSlice = createSlice({
    name:"theme",
    initialState:{
        background: '#ffffff',
        text: '#000000',
    },
    reducers: {
        changeTheme: (state, actions)=>{
            state.background = actions.payload.background,
            state.text = actions.payload.text
        }
    }
})



export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;