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
      const sectionKeys = action.payload.sectionKeys;
      const key = action.payload.key;
      const value = action.payload.value;

      let resume = state.resume[sectionKeys[0]];
      for (let i = 1; i < sectionKeys.length; i++) {
        resume = resume[sectionKeys[i]];
      }
      resume[key] = value;
    },
    updateResumeArray: (state, action) => {
      const sectionKeys = action.payload.sectionKeys;
      const value = action.payload.value;

      let resume = state.resume[sectionKeys[0]];
      for (let i = 1; i < sectionKeys.length; i++) {
        resume = resume[sectionKeys[i]];
      }
      resume.push(value);
    },
    deleteResumeArray: (state, action) => {
      const sectionKeys = action.payload.sectionKeys;
      const idx = action.payload.idx;

      let resume = state.resume[sectionKeys[0]];
      for (let i = 1; i < sectionKeys.length; i++) {
        resume = resume[sectionKeys[i]];
      }
      resume.splice(idx, 1);
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

export const { updateResume, updateResumeArray, deleteResumeArray } =
  resumeSlice.actions;
export default resumeSlice.reducer;
