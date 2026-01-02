import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// Async thunk to create a checkout session
export const createCheckout = createAsyncThunk(
  "checkout/createCheckout",
  async (checkoutdata, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/api/checkout",
        checkoutdata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.loading = false;
        state.checkoutInfo = action.payload;
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      });
  },
});

export default checkoutSlice.reducer;
