import axios, { AxiosResponse, Method } from "axios";

const client = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export const request = (
  method: Method,
  url: string,
  params?: any
): Promise<AxiosResponse> => {
  return client().request({ method, url, params });
};
