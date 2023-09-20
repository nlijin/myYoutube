import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    //using spread operator: es6 version
    cacheResults: (state, action) => ({ ...state, ...action.payload }),
  },

  // using Object.assign
  // cacheResults: (state, action) => {
  //   state = Object.assign(state, action.payload);
  // },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
