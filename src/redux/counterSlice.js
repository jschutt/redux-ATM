import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    showATM: false
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },

    decrement: (state, action) => {
      state.count -= action.payload;
    },
    showATM: (state) => {
        state.showATM = !state.showATM;
    }
  }
});

export const {increment, decrement, showATM} = counterSlice.actions;

export default counterSlice.reducer;
