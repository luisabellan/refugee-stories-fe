import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("token");
};
export const api = () => {
  return axios.create({
    baseURL: "api link ", //here is the link of the api
    Authorization: getToken()
  });
};
