import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  discount: 0,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,

  reducers: {

    applyCoupon(state, action) {

      const code = action.payload.toUpperCase();

      switch (code) {

        case "MAX20":
          state.code = code;
          state.discount = 20;
          break;

        case "WELCOME10":
          state.code = code;
          state.discount = 10;
          break;

        case "STUDENT15":
          state.code = code;
          state.discount = 15;
          break;

        default:
          state.code = "";
          state.discount = 0;

      }

    },

    clearCoupon(state) {
      state.code = "";
      state.discount = 0;
    },

  },
});

export const {
  applyCoupon,
  clearCoupon,
} = couponSlice.actions;

export default couponSlice.reducer;