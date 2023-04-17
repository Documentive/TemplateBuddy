import axios from "axios";

const API_BASE = `${process.env.REACT_APP_API_BASE}`;

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(`${API_BASE}/upload/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
