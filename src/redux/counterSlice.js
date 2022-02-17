import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1000,
    showATM: false
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },

    decrement: (state, action) => {
      if(action.payload > state.count){
        alert("Not enough money on your account!")
      } else {
        state.count -= action.payload;
      }
    },
    showATM: (state) => {
        state.showATM = !state.showATM;
        console.log(state.showATM)
    }
  }
});

export const {increment, decrement, showATM} = counterSlice.actions;

export default counterSlice.reducer;
