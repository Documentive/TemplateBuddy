import { createSlice } from "@reduxjs/toolkit";

import { uploadImageThunk } from "../services/upload-thunk";

let initialState = {
  imageUploading: false,
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
    },
    [uploadImageThunk.rejected]: (state, action) => {
      state.imageUploading = false;
    },
  },
});

export default uploadSlice.reducer;
