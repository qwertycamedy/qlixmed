import axios from "axios";
import { loadStatus } from "src/store/loadStatus";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUserAvatar = createAsyncThunk("user/getUserAvatar", async ({userId}) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}userAvatar/${userId}`
    );

    const myAvka = data.avatar_path.split('/').pop();
    console.log(myAvka);
    return myAvka;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  user: null,
  userAvatar: null,
  userLoadStatus: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },

  extraReducers: builder => {
    builder
      .addCase(getUserAvatar.pending, state => {
        state.userLoadStatus = loadStatus.pending;
      })
      .addCase(getUserAvatar.fulfilled, (state, action) => {
        state.userLoadStatus = loadStatus.fulfilled;
        state.userAvatar = action.payload;
      })
      .addCase(getUserAvatar.rejected, state => {
        state.userLoadStatus = loadStatus.rejected;
        state.userAvatar = null;
      });
  },
});

export const { setUser } = userSlice.actions;
export const userSel = state => state.user;

export default userSlice.reducer;
