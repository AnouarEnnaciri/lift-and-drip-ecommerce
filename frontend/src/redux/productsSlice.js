import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* Bonjour un petit rappel:
   FETCH PRODUCTS (FILTERS) */
export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async (filters) => {
    const query = new URLSearchParams();

    Object.entries(filters || {}).forEach(([k, v]) => {
      if (v !== null && v !== "" && v !== undefined) {
        query.append(k, v);
      }
    });

    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
    );

    return res.data;
  }
);

/* rappel
   FETCH PRODUCT DETAILS
 */
export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
    );
    return res.data;
  }
);

/* rappel
   FETCH SIMILAR PRODUCTS
 */
export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async ({ id }) => {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
    );
    return res.data;
  }
);

/* rappel
   SLICE
 */
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    similarProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      equipmentType: "",
      weight: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      isFeatured: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: "",
        equipmentType: "",
        weight: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        isFeatured: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder

      /* FETCH PRODUCTS */
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload || [];
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* PRODUCT DETAILS */
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* SIMILAR PRODUCTS */
      .addCase(fetchSimilarProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.similarProducts = action.payload || [];
      })
      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
