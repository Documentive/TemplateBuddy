import axios from "axios";

const API_BASE = `${process.env.REACT_APP_API_BASE}`;

export const getResume = async () => {
  const response = await axios.get(`${API_BASE}/resume`);
  return response;
};
