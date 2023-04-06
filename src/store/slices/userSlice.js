import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  username: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { email, username, token, id } = action.payload;

      state.email = email;
      state.username = username;
      state.token = token;
      state.id = id;
    },
    removeUser(state) {
      state.email = null;
      state.username = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
