import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// async thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/admin/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// async function to create a new product
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/admin/products", productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// async function to update an existing product
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/admin/products/${id}`, productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// async thunk to delete a product
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/admin/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      })
      // Create Product
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
      })
      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
      })
      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
      });
  },
});

export default adminProductSlice.reducer;
