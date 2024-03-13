import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    onHandleIncrease: (state, action) => {
      console.log("action:", action);
      state.value += action.payload;
    },
    onHandleDecrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

console.log("numberSlice:", numberSlice);

//dispatch에서 사용하기 위해
export const { onHandleIncrease, onHandleDecrease } = numberSlice.actions;
//store에서 사용하기 위해
export default numberSlice.reducer;
