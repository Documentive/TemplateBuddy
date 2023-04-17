import { createAsyncThunk } from "@reduxjs/toolkit";
import * as resume_service from "./resume-service";

export const getResumeThunk = createAsyncThunk("resume/getResume", async () => {
  const response = await resume_service.getResume();
  return response;
});

export const putSectionThunk = createAsyncThunk(
  "resume/putSection",
  async (payload) => {
    const response = await resume_service.putSection(
      payload.section_name,
      payload.section
    );
    return response;
  }
);
