import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
   addUserInfo: (state, action) => {
     state.value.push(action.payload);
   },
   logoutUser : (state , action) => {
    state.value = []
   }
 },
});

export const { addUserInfo ,logoutUser } = userSlice.actions;
export default userSlice.reducer;