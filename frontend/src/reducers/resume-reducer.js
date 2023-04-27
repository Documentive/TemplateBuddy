import { createSlice } from "@reduxjs/toolkit";

import { getResumeThunk, putSectionThunk } from "../services/resume-thunk";

let initialState = {
  resume: null,
  resumeLoading: false,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateResume: (state, action) => {
      const sectionKey = action.payload.sectionKey;
      const innerSectionKey = action.payload.innerSectionKey;
      const key = action.payload.key;
      const value = action.payload.value;

      if (innerSectionKey) {
        state.resume[sectionKey][innerSectionKey][key] = value;
      } else {
        state.resume[sectionKey][key] = value;
      }
    },
  },
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

export const { updateResume, getCurrentResume } = resumeSlice.actions;
export default resumeSlice.reducer;
