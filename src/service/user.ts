import axios, { AxiosResponse } from "axios";
import { User } from "../types/user";

const ENPDOINT = process.env.REACT_APP_API_ENDPOINT;

const LOGIN_URL = `${ENPDOINT}/users/login`;
const ME_URL = `${ENPDOINT}/users/me`;

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
