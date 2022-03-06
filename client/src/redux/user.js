import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      return (
        (state.user = null), (state.isFetching = true), (state.error = false)
      );
    },
    loginSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (
        (state.user = action.payload),
        (state.isFetching = false),
        (state.error = false)
      );
    },
    loginFailure: (state) => {
      return (
        (state.user = null), (state.isFetching = false), (state.error = true)
      );
    },
    defaultState: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, defaultState } =
  userSlice.actions;

export default userSlice.reducer;
