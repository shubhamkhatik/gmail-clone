import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    
    login: (state, action) => {
      state.user = action.payload;

    },
    logout: (state, action) => {
        state.user = null;
  
      }
  },
});

export const {login, logout } = userSlice.actions;

// use in App.js for check true or not
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
