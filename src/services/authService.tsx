// src/services/authService.ts
import axios from "axios";
import { THandleLoginProps } from "../context/auth/_type/TYPE";
export const findOneUser = (email: string) => {
  return axios.post(`${API_URL}/findOneUser`, { email });
};
const API_URL = "http://localhost:4000/api/v1.0/auth";

export const generateOtp = (email: string) => {
  return axios.post(`${API_URL}/generate-otp`, { email });
};

export const getOtp = (email: string) => {
  return axios.post(`${API_URL}/get-otp`, { email });
};

export const refreshOtp = (email: string) => {
  return axios.post(`${API_URL}/refresh-otp`, { email });
};

export const loginWithOtp = (email: string, otp: string) => {
  return axios.post(`${API_URL}/login-otp`, { email, otp });
};



export const login = (body: THandleLoginProps) => {
  return axios.post(`${API_URL}/login/`, body);
};



export const checkToken = () => {
  const token = localStorage.getItem("token");
console.log(token)
  return axios.get(`${API_URL}/checkToken`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
