import axios from 'axios';
import { loadStatus } from 'src/store/loadStatus';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}GetAllServices`,
      );

      const services = data.services.data;

      console.log(services);
      return services;
    } catch (err) {
      console.log(err);
    }
  },
);

const initialState = {
  products: [],
  productsLoadStatus: 'idle',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsLoadStatus = loadStatus.pending;
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoadStatus = loadStatus.fulfilled;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsLoadStatus = loadStatus.rejected;
        state.products = [];
      });
  },
});

// export const { } = productsSlice.actions;
export const productsSel = (state) => state.products;

export default productsSlice.reducer;
