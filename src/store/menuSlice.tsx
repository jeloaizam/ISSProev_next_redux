import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

//Type for our state
export interface MenuState {
  authState: boolean;
}

// Initial state
const initialState: MenuState = {
  authState: false,
};

// Actual Slice
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {

    // Action to set the authentication status
    setMenuState(state, action) {
      state.authState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },

  },
});

export const { setMenuState } = menuSlice.actions;

export const selectMenuState = (state: AppState) => state.auth.menuState;

export default menuSlice.reducer;