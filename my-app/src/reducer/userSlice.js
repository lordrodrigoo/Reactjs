import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  name: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.name = action.payload;
    },
    logout: (state) => {      // <-- vírgula separando os reducers
      state.isLogged = false;
      state.name = '';
    }
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;

