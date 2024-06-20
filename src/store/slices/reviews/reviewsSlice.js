import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ newReview, card_id }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const bodyParams = {
        card_id: card_id,
        user_name: newReview.name,
        email: newReview.email,
        rating: newReview.grade,
        description: newReview.text,
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}addReviews`,
        bodyParams,
        config,
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async ({ card_id }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}reviews/${card_id}`,
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

const initialState = {
  reviewsLoadStatus: 'idle',
  isOnAdding: false,
  isSent: false,

  newReview: {
    name: '',
    email: '',
    grade: 0,
    text: '',
  },

  reviews: null,

  allIsOpen: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setIsOnAdding: (state, action) => {
      state.isOnAdding = action.payload;
    },
    setIsSent: (state, action) => {
      state.isSent = action.payload;
    },

    setNewReviewName: (state, action) => {
      state.newReview.name = action.payload;
    },
    setNewReviewEmail: (state, action) => {
      state.newReview.email = action.payload;
    },
    setNewReviewText: (state, action) => {
      state.newReview.text = action.payload;
    },
    setNewReviewGrade: (state, action) => {
      state.newReview.grade = action.payload;
    },

    setNewReview: (state, action) => {
      state.reviews.push(action.payload);
    },

    setAllIsOpen: (state, action) => {
      state.allIsOpen = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.reviewsLoadStatus = loadStatus.pending;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviewsLoadStatus = loadStatus.fulfilled;
        state.isSent = true;
      })
      .addCase(addReview.rejected, (state) => {
        state.reviewsLoadStatus = loadStatus.rejected;
      });
    builder
      .addCase(getReviews.pending, (state) => {
        state.reviewsLoadStatus = loadStatus.pending;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviewsLoadStatus = loadStatus.fulfilled;
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state) => {
        state.reviewsLoadStatus = loadStatus.rejected;
      });
  },
});

export const {
  setIsOnAdding,
  setIsSent,
  setNewReviewEmail,
  setNewReviewGrade,
  setNewReviewName,
  setNewReviewText,
  setNewReview,
  setAllIsOpen,
} = reviewsSlice.actions;
export const reviewsSel = (state) => state.reviews;

export default reviewsSlice.reducer;
