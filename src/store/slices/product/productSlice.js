import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getIdOfServiceBySlug = createAsyncThunk(
  'products/getIdOfServiceBySlug',
  async ({ user_slug, service_slug }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}card_id/${user_slug}/${service_slug}`,
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getInfoOfService = createAsyncThunk(
  'products/getInfoOfService',
  async ({ user_id }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}user/${user_id}`,
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getInfoOfServiceSeller = createAsyncThunk(
  'products/getInfoServiceSeller',
  async ({ user_id }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}user/${user_id}`,
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getCity = createAsyncThunk(
  'products/getCity',
  async ({ city_id }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}city/${city_id}`,
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);


export const getCities = createAsyncThunk(
  'products/getCities',
  async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}cities`,
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}categoriesAll`,
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);


export const getWorks = createAsyncThunk(
  'products/getWorks',
  async ({card_id}) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}works/${card_id}`,
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);


export const createProduct = createAsyncThunk(
  'product/createProduct',
  async ({ token, product }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}CreateServices`,
        product,
        config,
      );

      return data;
    } catch (err) {
      console.log(`ошибка создания товара: ${err}`);
    }
  },
);

const initialState = {
  productLoadStatus: 'idle',
  secondAPILoadStatus: 'idle',

  product: null,
  serviceSeller: null,
  serviceCity: null,
  cities: null,
  categories: null,
  works: null,

  modalIsOpen: false,
  workModalIsOpen: false,
  curWork: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setModalIsOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },

    setProduct: (state, action) => {
      state.product = action.payload;
    },

    setWorkModalIsOpen: (state, action) => {
      state.workModalIsOpen = action.payload;
    },

    setCurWork: (state,action) => {
      state.curWork = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getIdOfServiceBySlug.pending, (state) => {
        state.productLoadStatus = loadStatus.pending;
      })
      .addCase(getIdOfServiceBySlug.fulfilled, (state, action) => {
        console.log(action)
        if (action.payload === undefined) {
          state.productLoadStatus = loadStatus.rejected;
          state.product = null;
        } else {
          state.productLoadStatus = loadStatus.fulfilled;
          state.product = action.payload;
        }
      })
      .addCase(getIdOfServiceBySlug.rejected, (state) => {
        state.productLoadStatus = loadStatus.rejected;
        state.product = null;
      })



    builder
      .addCase(getInfoOfServiceSeller.pending, (state) => {
        state.secondAPILoadStatus = loadStatus.pending;
      })
      .addCase(getInfoOfServiceSeller.fulfilled, (state, action) => {
        state.secondAPILoadStatus = loadStatus.fulfilled;
        state.serviceSeller = action.payload;
      })
      .addCase(getInfoOfServiceSeller.rejected, (state) => {
        state.secondAPILoadStatus = loadStatus.rejected;
      });



      builder
        .addCase(getCity.pending, (state) => {
          state.secondAPILoadStatus = loadStatus.pending;
        })
        .addCase(getCity.fulfilled, (state, action) => {
          state.secondAPILoadStatus = loadStatus.fulfilled;
          state.serviceCity = action.payload;
        })
        .addCase(getCity.rejected, (state) => {
          state.secondAPILoadStatus = loadStatus.rejected;
        });



        builder
        .addCase(getCities.pending, (state) => {
          state.secondAPILoadStatus = loadStatus.pending;
        })
        .addCase(getCities.fulfilled, (state, action) => {
          state.secondAPILoadStatus = loadStatus.fulfilled;
          state.cities = action.payload;
        })
        .addCase(getCities.rejected, (state) => {
          state.secondAPILoadStatus = loadStatus.rejected;
        });



        builder
        .addCase(getCategories.pending, (state) => {
          state.secondAPILoadStatus = loadStatus.pending;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
          state.secondAPILoadStatus = loadStatus.fulfilled;
          state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state) => {
          state.secondAPILoadStatus = loadStatus.rejected;
        });




        builder
        .addCase(getWorks.pending, (state) => {
          state.secondAPILoadStatus = loadStatus.pending;
        })
        .addCase(getWorks.fulfilled, (state, action) => {
          state.secondAPILoadStatus = loadStatus.fulfilled;
          state.works = action.payload;
        })
        .addCase(getWorks.rejected, (state) => {
          state.secondAPILoadStatus = loadStatus.rejected;
        });






    builder
      .addCase(createProduct.pending, (state) => {
        state.secondAPILoadStatus = loadStatus.pending;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.secondAPILoadStatus = loadStatus.fulfilled;
        console.log('товар создан: ', action.payload.product);
      })
      .addCase(createProduct.rejected, (state) => {
        state.secondAPILoadStatus = loadStatus.rejected;
      });
  },
});

export const { setModalIsOpen, setProduct, setWorkModalIsOpen, setCurWork } =
  productSlice.actions;
export const productSel = (state) => state.product;

export default productSlice.reducer;
