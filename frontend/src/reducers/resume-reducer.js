import { createSlice } from "@reduxjs/toolkit";

import { getResumeThunk, putSectionThunk } from "../services/resume-thunk";

let initialState = {
  resume: null,
  resumeLoading: false,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
  extraReducers: {
    [getResumeThunk.pending]: (state, _action) => {
      state.resumeLoading = true;
    },
    [getResumeThunk.fulfilled]: (state, action) => {
      state.resumeLoading = false;
      state.resume = action.payload.data.resume;
      localStorage.setItem(
        "resume",
        JSON.stringify(action.payload.data.resume)
      );
    },
    [getResumeThunk.rejected]: (state, _action) => {
      state.resumeLoading = false;
    },
    [putSectionThunk.pending]: (state, _action) => {
      state.resumeLoading = true;
    },
    [putSectionThunk.fulfilled]: (state, action) => {
      state.resumeLoading = false;
      state.resume = action.payload.data.updatedResume;
      localStorage.setItem(
        "resume",
        JSON.stringify(action.payload.data.updatedResume)
      );
    },
    [putSectionThunk.rejected]: (state, _action) => {
      state.resumeLoading = false;
    },
  },
});

export default resumeSlice.reducer;
