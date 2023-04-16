import { createSlice } from "@reduxjs/toolkit";

import { uploadImageThunk } from "../services/upload-thunk";

let initialState = {
  imageUploading: false,
  imageURL: "",
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: {
    [uploadImageThunk.pending]: (state, action) => {
      state.imageUploading = true;
    },
    [uploadImageThunk.fulfilled]: (state, action) => {
      state.imageUploading = false;
      state.imageURL = `${process.env.REACT_APP_API_BASE}${action.payload.data.path}`;
      console.log(state.imageURL);
    },
    [uploadImageThunk.rejected]: (state, action) => {
      state.imageUploading = false;
    },
  },
});

export default uploadSlice.reducer;
