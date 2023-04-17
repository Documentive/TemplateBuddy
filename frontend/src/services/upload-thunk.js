import { createAsyncThunk } from "@reduxjs/toolkit";
import * as upload_service from "./upload-service";

export const uploadImageThunk = createAsyncThunk(
  "upload/uploadImage",
  async (file) => {
    const response = await upload_service.uploadImage(file);
    return response;
  }
);
