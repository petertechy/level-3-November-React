import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
  },

  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (p) => p.id !== action.payload
      );
    },

    editProduct: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.products.findIndex((p) => p.id === id);

      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedData };
      }
    },

    viewProduct: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      state.selectedProduct = product || null;
    },
  },
});

export const { addProduct, deleteProduct, editProduct, viewProduct } =
  productSlice.actions;

export default productSlice.reducer;
