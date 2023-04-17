import { createAsyncThunk } from "@reduxjs/toolkit";
import * as resume_service from "./resume-service";

export const getResumeThunk = createAsyncThunk("resume/getResume", async () => {
  const response = await resume_service.getResume();
  return response;
});
