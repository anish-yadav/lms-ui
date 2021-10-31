import axios, { AxiosResponse } from "axios";
import { User } from "../types/user";

// const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const ENDPOINT = "http://localhost:8080/api/v1";
const LOGIN_URL = `${ENDPOINT}/users/login`;
const ME_URL = `${ENDPOINT}/users/me`;
const REQUEST_RESET_URL = `${ENDPOINT}/users/request-password-reset`;
const PWD_RESET_URL = `${ENDPOINT}/users/reset-password`;

interface ResponseType {
  error: string;
  data: { token: string; user: User } | null;
}

interface LoginResponse {
  status: number;
  error: string;
  data: { token: string; user: User } | null;
}

const api = axios.create({
  validateStatus: function (status: number) {
    return true;
  },
});

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const loginReqData = {
    username: email,
    password: password,
  };
  const { status, data } = await api.post<any, AxiosResponse<ResponseType>>(
    LOGIN_URL,
    loginReqData
  );

  return {
    status,
    error: data.error,
    data: data.data,
  };
};

export const getMe = async (token: string): Promise<LoginResponse> => {
  const { status, data } = await api.get<any, AxiosResponse<ResponseType>>(ME_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    status,
    error: data.error,
    data: data.data,
  };
};

export const requestResetPassword = async (email: string): Promise<boolean> => {
  const reqData = { email };
  const { status, data } = await api.post<any, any>(REQUEST_RESET_URL, reqData);
  if (status === 200) {
    return true;
  } else {
    return false;
  }
};

export const resetPassword = async (newPassword: string, token: string): Promise<boolean> => {
  const reqData = { newPassword };
  const { status } = await api.post<any, any>(PWD_RESET_URL, reqData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (status === 200) return true;
  else return false;
};
